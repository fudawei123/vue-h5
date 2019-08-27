<template>
  <div class="my-share" @click="cancel">
    <div class="content" @click.stop>
      <div class="share">
        分享到
        <van-icon @click="cancel" name="cross"/>
      </div>
      <ul class="list">
        <li class="item-wrapper" v-for="(item, index) in list" :key="index">
          <div class="item" @click="share(item.platform)">
            <div class="img-wrapper">
              <img class="common-img" :src="item.img" alt>
            </div>
            <p>{{item.name}}</p>
          </div>
        </li>
        <li class="item-wrapper" v-if="isShowCollection">
          <div class="item" @click="collectionHandler">
            <div class="img-wrapper">
              <img v-if="flag" class="common-img" src="@/common/imgs/shoucang.png" alt>
              <img v-else class="common-img" src="@/common/imgs/yishoucang.png" alt>
            </div>
            <p>{{flag ? '已收藏' : '收藏'}}</p>
          </div>
        </li>
      </ul>
      <!-- <div class="placeholder"></div>
      <div class="cancel" @click="cancel">取消</div>-->
    </div>
  </div>
</template>

<script>
import Bridge from "@/bridge/call";

const wx = require("@/common/imgs/wx.png");
const pyq = require("@/common/imgs/pyq.png");
const qq = require("@/common/imgs/qq.png");
// const shoucang = require("@/common/imgs/shoucang.png");
// const yishoucang = require("@/common/imgs/yishoucang.png");

export default {
  name: "MyShare",
  props: {
    title: {
      type: String,
      required: true,
      default: "一汽奥迪"
    },
    imageURL: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isShowCollection: {
      type: Boolean,
      default: true
    },
    collectionStatus: {
      type: Boolean
    },
    content: {}
  },
  data() {
    return {
      list: [
        {
          name: "微信",
          platform: "WEIXIN",
          img: wx
        },
        {
          name: "朋友圈",
          platform: "WEIXIN_CIRCLE",
          img: pyq
        },
        {
          name: "QQ",
          platform: "QQ",
          img: qq
        }
      ],
      flag: this.collectionStatus
    };
  },
  methods: {
    collectionHandler() {
      if (this.flag) {
        this.$emit("unCollection", 0, () => {
          this.flag = false;
        });
      } else {
        this.$emit("collection", 1, () => {
          this.flag = true;
        });
      }
    },
    share(platform) {
      Bridge.share({
        platform,
        content: this.content,
        title: this.title,
        description: this.description,
        imageURL: this.imageURL
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="scss" scoped>
.my-share {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  .content {
    padding: 15px 15px 0 15px;
    background-color: #fff;
    .placeholder {
      height: 10px;
    }
    .cancel {
      background-color: #fff;
      border-radius: 4px;
      font-size: 16px;
      color: #49bbff;
      line-height: 44px;
      text-align: center;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    // border-radius: 4px;
    .item-wrapper {
      display: flex;
      justify-content: center;
      width: 33.3333333333%;
      padding-bottom: 20px;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-wrapper {
      width: 48px;
      height: 48px;
      margin-bottom: 5px;
    }
    > p {
      font-size: 13px;
      line-height: 13px;
    }
  }
  .share {
    position: relative;
    margin-bottom: 41px;
    font-size: 15px;
    color: #333;
    text-align: center;
    line-height: 15px;
    > i {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
  }
}
</style>


