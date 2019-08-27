<template>
  <div class="my-like-collection">
    <div class="content" :class="{'fixed': fixed}">
      <div class="box" :class="{'selected': likeStatus}" @click="like">
        <van-icon name="good-job-o" v-show="!likeStatus"/>
        <van-icon name="good-job" v-show="likeStatus"/>
        <span>{{likeNum}}</span>
      </div>
      <div class="box" :class="{'selected': collectionStatus}" @click="collection">
        <van-icon name="like-o" v-show="!collectionStatus"/>
        <van-icon name="like" v-show="collectionStatus"/>
        <!-- <span>{{likeNum}}111</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLikeCollection",
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    likeNum: {},
    likeStatus: {},
    collectionStatus: {}
  },
  methods: {
    collection() {
      this.$emit("collection", this.collectionStatus);
    },
    /**
     * 点赞操作
     */
    like() {
      this.$emit("like", this.likeStatus);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-like-collection {
  height: 50px;
  .content {
    display: flex;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    &.fixed {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 666;
      width: 100%;
    }
  }
  .box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
    &.selected {
      color: $color-red;
    }
    > span {
      margin-left: 5px;
      color: #000;
    }
  }
}
</style>


