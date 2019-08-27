<template>
  <div class="read-like" @click.stop>
    <div class="num">
      <van-icon name="eye-o"/>
      <span>{{readNum}}</span>
    </div>
    <div class="num" @click="like">
      <van-icon name="good-job-o" v-show="!likeStatus"/>
      <van-icon name="good-job" :class="{'selected': likeStatus}" v-show="likeStatus"/>
      <span>{{likeNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyReadLike",
  props: {
    readNum: {
      // type: Number,
      required: true
    },
    likeStatus: {
      // type: Boolean,
      required: true
    },
    likeNum: {
      // type: Number,
      required: true
    }
  },
  methods: {
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
.read-like {
  display: flex;
  // justify-content: space-between;
  // font-size: 14px;
  // line-height: 14px;
  .num {
    display: flex;
    align-items: center;
    &:nth-child(1) {
      margin-right: 24px;
    }
    > i {
      font-size: 14px;
      color: #999;
      line-height: 14px;
      &.selected {
        color: $color-red;
      }
    }
    > span {
      margin-left: 8px;
      color: #666;
    }
  }
}
</style>


