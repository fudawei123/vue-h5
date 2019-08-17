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
            <p class="manage-title">{{slotProps.item.manageTitle}}</p>
            <div class="box">
              <div class="common-img-wrapper">
                <my-img :imgUrl="slotProps.item.imgUrl"/>
              </div>
            </div>
            <my-read-like-util
              :readNum="slotProps.item.readNum"
              :likeStatus="slotProps.item.likeStatus"
              :likeNum="slotProps.item.likeNum"
              :index="slotProps.index"
              :manageId="slotProps.item.manageId"
            />
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
    padding: 20px 0;
    .manage-title {
      font-size: 15px;
      line-height: 20px;
    }
  }
  .box {
    @include fixed-img-ratio(50%);
  }
  .van-image {
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>


