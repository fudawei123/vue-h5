<template>
  <div class="my-like-collection-util">
    <my-like-collection
      :likeNum="likeNum"
      :likeStatus="!!likeStatus"
      :collectionStatus="!!collectionStatus"
      @like="like"
      @collection="collection"
    />
  </div>
</template>
<script>
import {
  setUserLikeGiveInformationLike,
  setUserLikeRemoveInformationLike,
  userCollectionCollectionInformation,
  userCollectionUnCollectionInformation
} from "@/api/news/api";

export default {
  name: "MyLikeCollectionUtil",
  props: {
    likeNum: {},
    likeStatus: {},
    collectionStatus: {},
    manageId: {},
    index: {}
  },
  methods: {
    collection(collectionStatus) {
      const params = {
        lid: this.manageId
      };

      if (collectionStatus) {
        userCollectionUnCollectionInformation(params).then(() => {
          this.$emit("collection", 0);
        });
      } else {
        userCollectionCollectionInformation(params).then(() => {
          this.$emit("collection", 1);
        });
      }
    },
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

<style lang="scss" scoped>
.my-like-collection-util {
}
</style>


