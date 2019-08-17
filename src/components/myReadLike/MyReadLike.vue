<template>
  <div class="read-like" @click.stop>
    <div class="num">
      <van-icon name="eye-o"/>
      <span>{{readNum}}</span>
    </div>
    <div class="num" @click="like">
      <van-icon name="good-job-o" v-show="!likeStatus"/>
      <van-icon name="good-job" v-show="likeStatus" color="red"/>
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
  justify-content: space-between;
  font-size: 14px;
  line-height: 14px;
  .num {
    display: flex;
    align-items: center;
    > span {
      margin-left: 5px;
    }
  }
}
</style>


