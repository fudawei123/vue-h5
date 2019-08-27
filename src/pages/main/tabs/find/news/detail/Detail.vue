<template>
  <div class="news-details">
    <div class="box">
      <div class="common-img-wrapper">
        <my-img :imgUrl="newsDetails.imgUrl"/>
      </div>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <van-skeleton :row="2" :loading="loading">
          <p class="manage-title">{{newsDetails.manageTitle}}</p>
        </van-skeleton>
        <div class="logo-wrapper">
          <div class="logo-date-wrapper">
            <div class="logo-name-wrapper">
              <div class="logo">
                <!-- <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt> -->
                <van-icon color="#000" size="0.533049rem" class-prefix="my-icon" name="aodi"/>
              </div>
              <p class="name">Audi官方</p>
            </div>
            <p>{{newsDetails.createDate | formateDate}}</p>
          </div>
          <div class="num">
            <van-icon name="eye-o"/>
            <span>{{newsDetails.readNum}}</span>
          </div>
        </div>
        <!-- <div class="data-eye-wrapper">
          <p>{{newsDetails.issuedDate}}</p>
          <div class="num">
            <van-icon name="eye-o"/>
            <span>{{newsDetails.readNum}}</span>
          </div>
        </div>-->
        <!-- <div class="my-read-like-wrapper">
          <my-read-like-util
          :readNum="newsDetails.readNum"
          :likeStatus="newsDetails.likeStatus"
          :likeNum="newsDetails.likeNum"
          :manageId="$route.query.manageId"
          :index="$route.query.index"
          @like="like"
          />
        </div>-->
      </div>
      <div class="F2F2F2"></div>
      <div ref="manageBody" class="manage-body" v-html="newsDetails.manageBody"></div>
    </div>
    <my-like-collection-util
      v-if="flag"
      :likeNum="newsDetails.likeNum"
      :likeStatus="newsDetails.likeStatus"
      :collectionStatus="newsDetails.collectionStatus"
      :manageId="$route.query.manageId"
      :index="$route.query.index"
      @like="like"
      @collection="collection"
    />
  </div>
</template>

<script>
import {
  getInformationDetail,
  getReaderHistoryInformation
} from "@/api/news/api";
// import MyReadLikeUtil from "../utils/MyReadLikeUtil";
import MyLikeCollectionUtil from "../utils/MyLikeCollectionUtil";
import MyShareUtil from "../utils/MyShareUtil";
import DoubleShare from "@/utils/DoubleShare";

export default {
  props: {
    flag: {
      default: true
    }
  },
  name: "NewsDetails",
  components: {
    // MyReadLikeUtil
    MyLikeCollectionUtil
  },
  data() {
    return {
      newsDetails: {},
      loading: true
    };
  },
  created() {
    this.setOnClickRight();
    this.getInformationDetail().then(() => {
      this.getReaderHistoryInformation();
    });
  },
  methods: {
    collection(collectionStatus) {
      this.newsDetails.collectionStatus = collectionStatus;
    },
    like({ likeStatus, likeNum }) {
      this.newsDetails.likeStatus = likeStatus;
      this.newsDetails.likeNum = likeNum;
    },
    setOnClickRight() {
      this.$store.commit("navBar/setConfig", {
        flag: this.flag,
        onClickRight: () => {
          MyShareUtil(this);
        }
      });
    },
    getReaderHistoryInformation() {
      getReaderHistoryInformation({
        lid: this.$route.query.manageId
      }).then(({ data }) => {
        this.newsDetails.readNum = data;
        this.$store.commit("news/setItem", {
          index: this.$route.query.index,
          item: {
            readNum: data
          }
        });
      });
    },
    getInformationDetail() {
      return getInformationDetail({
        id: this.$route.query.manageId
      }).then(({ data }) => {
        this.newsDetails = data;
        this.loading = false;
        const { manageTitle, manageBody, imgUrl } = data;

        DoubleShare(manageTitle, manageBody, imgUrl);
      });
    }
  },
  updated() {
    this.$nextTick(() => {
      const manageBody = this.$refs.manageBody;
      const h1 = manageBody.querySelector("h1");
      const spans = manageBody.querySelectorAll("span");
      const imgs = manageBody.querySelectorAll("img");
      const ps = manageBody.querySelectorAll("p");

      if (h1) {
        h1.style["line-height"] = h1.style["font-size"];
      }
      for (let span of spans) {
        span.style["white-space"] = "normal";
      }
      for (let img of imgs) {
        img.style["width"] = "100%";
        img.style["height"] = "auto";
      }
      for (let p of ps) {
        const spans = p.querySelectorAll("span");
        const strongs = p.querySelectorAll("strong");
        const imgs = p.querySelectorAll("img");

        if (spans.length === 0 && strongs.length === 0 && imgs.length === 0) {
          p.style.display = "none";
        }
        if (spans.length != 0) {
          p.style["text-align"] = "center";
        }
        if (spans.length === 0 && strongs.length != 0 && imgs.length === 0) {
          p.style.padding = "0.399786rem";
        }
        p.style["font-size"] = "0.373134rem";
        p.style["color"] = "#333";
        p.style["line-height"] = "0.666311rem";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.news-details {
  .box {
    @include fixed-img-ratio(67%);
  }
  .content {
    // padding: 15px 15px 0 15px;
    .manage-title {
      margin-bottom: 22px;
      font-size: 20px;
      color: #333;
      line-height: 24px;
    }
    .issued-date {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 12px;
      text-align: end;
    }
    .my-read-like-wrapper {
      margin-bottom: 16px;
    }
  }
  .data-eye-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 14px;
  }
  .content-wrapper {
    padding: 10px 15px 20px 15px;
  }
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 12px;
    color: #666;
    line-height: 12px;
    .logo-name-wrapper {
      display: flex;
      align-items: center;
      margin-right: 10px;
      .logo {
        width: 24px;
        height: 24px;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 6px;
        text-align: center;
        line-height: 23px;
        overflow: hidden;
        > img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 12px;
        color: #666;
        line-height: 12px;
      }
    }
  }
  .logo-date-wrapper {
    display: flex;
    align-items: center;
  }
  .num {
    display: flex;
    align-items: center;
    > i {
      font-size: 14px;
      color: #999;
      line-height: 14px;
    }
    > span {
      margin-left: 8px;
    }
  }
  .F2F2F2 {
    height: 10px;
    background-color: #f2f2f2;
  }
}
</style>


