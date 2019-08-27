import {
  userCollectionCollectionInformation,
  userCollectionUnCollectionInformation
} from "@/api/news/api";

export default (_this) => {
  // 直接调用
  // 传入配置对象，默认传入的所有对象全都当做 props 传入组件
  // 除了在调用 createAPI 的时候传入了 events，这里对应的就是
  // on{event name} 会被当做事件回调处理
  const instance = _this.$createMyShare({
    // title: _this.newsDetails.manageTitle || "一汽奥迪",
    // imageURL: _this.newsDetails.pictureUrl || _this.newsDetails.imgUrl,
    // description: _this.newsDetails.title || _this.newsDetails.manageTitle,
    // collectionStatus: !!_this.newsDetails.collectionStatus,
    isShowCollection: false,
    // content: `${window.shareURL}newsDetailsShare?manageId=${_this.$route.query.manageId}`
  });

  instance.$on("cancel", () => {
    instance.remove();
  });
  instance.$on("collection", (collectionStatus, callback) => {
    userCollectionCollectionInformation({
        lid: _this.$route.query.manageId
      })
      .then(() => {
        _this.newsDetails.collectionStatus = collectionStatus;
        callback && callback()
      })
  });
  instance.$on("unCollection", (collectionStatus, callback) => {
    userCollectionUnCollectionInformation({
        lid: _this.$route.query.manageId
      })
      .then(() => {
        _this.newsDetails.collectionStatus = collectionStatus;
        callback && callback()
      })
  });
}
