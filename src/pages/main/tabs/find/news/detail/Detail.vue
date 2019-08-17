<template>
  <div class="news-details">
    <div class="box">
      <div class="common-img-wrapper">
        <my-img :imgUrl="newsDetails.imgUrl"/>
      </div>
    </div>
    <div class="content">
      <p class="manage-title">{{newsDetails.manageTitle}}</p>
      <p class="issued-date">{{newsDetails.issuedDate}}</p>
      <my-read-like-util
        :readNum="newsDetails.readNum"
        :likeStatus="newsDetails.likeStatus"
        :likeNum="newsDetails.likeNum"
        :manageId="$route.query.manageId"
        :index="$route.query.index"
        @like="like"
      />
      <div ref="manageBody" class="manage-body" v-html="newsDetails.manageBody"></div>
    </div>
  </div>
</template>

<script>
import {
  getInformationDetail,
  getReaderHistoryInformation
} from "@/api/news/api";
import MyReadLikeUtil from "../utils/MyReadLikeUtil";
import MyShareUtil from "../utils/MyShareUtil";

export default {
  name: "NewsDetails",
  components: {
    MyReadLikeUtil
  },
  data() {
    return {
      newsDetails: {}
    };
  },
  created() {
    this.setOnClickRight();
    this.getInformationDetail().then(() => {
      this.getReaderHistoryInformation();
    });
  },
  methods: {
    like({ likeStatus, likeNum }) {
      this.newsDetails.likeStatus = likeStatus;
      this.newsDetails.likeNum = likeNum;
    },
    setOnClickRight() {
      this.$store.commit("navBar/setConfig", {
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
      });
    }
  },
  updated() {
    this.$nextTick(() => {
      const manageBody = this.$refs.manageBody;
      const h1 = manageBody.querySelector("h1");
      const spans = manageBody.querySelectorAll("span");
      const imgs = manageBody.querySelectorAll("img");

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
    });
  }
};
</script>

<style lang="scss" scoped>
.news-details {
  .box {
    @include fixed-img-ratio(70%);
  }
  .content {
    padding: 15px 15px 0 15px;
    .manage-title {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 20px;
    }
    .issued-date {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 12px;
      text-align: end;
    }
  }
}
</style>


