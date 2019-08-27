<template>
  <div class="news">
    <my-list spacename="news">
      <template v-slot:default="slotProps">
        <div
          class="item-wrapper"
          v-if="slotProps.item.manageType != 3"
          @click="gotoNewsDetails(slotProps.item.manageId, slotProps.index)"
        >
          <div class="item van-hairline--bottom">
            <div class="logo-wrapper">
              <div class="logo-name-wrapper">
                <div class="logo">
                  <!-- <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt> -->
                  <van-icon color="#000" size="0.533049rem" class-prefix="my-icon" name="aodi"/>
                </div>
                <p class="name">Audi官方</p>
              </div>
              <div></div>
            </div>
            <p class="manage-title">{{slotProps.item.manageTitle}}</p>
            <div class="box">
              <div class="common-img-wrapper">
                <my-img :imgUrl="slotProps.item.imgUrl"/>
              </div>
            </div>
            <div class="create-date-wrapper">
              <div class="create-date">{{slotProps.item.createDate | formateDate}}</div>
              <my-read-like-util
                :readNum="slotProps.item.readNum"
                :likeStatus="slotProps.item.likeStatus"
                :likeNum="slotProps.item.likeNum"
                :index="slotProps.index"
                :manageId="slotProps.item.manageId"
              />
            </div>
          </div>
        </div>
      </template>
    </my-list>
  </div>
</template>

<script>
import MyReadLikeUtil from "../utils/MyReadLikeUtil";

export default {
  name: "News",
  components: {
    MyReadLikeUtil
  },
  methods: {
    gotoNewsDetails(manageId, index) {
      this.$router.push({
        path: "/newsDetails",
        query: {
          manageId,
          index
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  padding: 0 10px;
  .item {
    padding: 20px 0 34px 0;
    border-bottom: 1px solid #eee;
    .manage-title {
      margin-bottom: 15px;
      font-size: 16px;
      color: #333;
      line-height: 20px;
    }
  }
  .box {
    @include fixed-img-ratio(52%);
    margin-bottom: 23px;
  }
  .van-image {
    border-radius: 6px;
    overflow: hidden;
  }
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .logo-name-wrapper {
      display: flex;
      align-items: center;
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
  .create-date-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #666;
    line-height: 12px;
  }
}
</style>


