<template>
  <my-read-like :readNum="readNum" :likeStatus="!!likeStatus" :likeNum="likeNum" @like="like"/>
</template>

<script>
import {
  setUserLikeGiveInformationLike,
  setUserLikeRemoveInformationLike
} from "@/api/news/api";

export default {
  name: "MyReadLikeUtil",
  props: {
    readNum: {
      // type: Number,
      required: true
    },
    likeStatus: {
      // type: Number,
      required: true
    },
    likeNum: {
      // type: Number,
      required: true
    },
    index: {
      // type: Number,
      required: true
    },
    manageId: {
      // type: Number,
      required: true
    }
  },
  methods: {
    /**
     * 点赞操作
     */
    like(likeStatus) {
      const fn = (likeStatus, likeNum) => {
        this.$store.commit("news/setItem", {
          index: this.index,
          item: {
            likeStatus,
            likeNum
          }
        });
        this.$emit("like", {
          likeStatus,
          likeNum
        });
      };
      const params = {
        lid: this.manageId
      };

      if (likeStatus) {
        setUserLikeRemoveInformationLike(params).then(({ data: { num } }) => {
          fn(0, num);
        });
      } else {
        setUserLikeGiveInformationLike(params).then(({ data: { num } }) => {
          fn(1, num);
        });
      }
    }
  }
};
</script>

<style>
</style>


