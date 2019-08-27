<template>
  <div class="activity-detail">
    <div class="section1">
      <div class="top">
        <div class="left">
          <span>
            <van-icon size="30px" class-prefix="my-icon" name="aodi"/>
          </span>
          <span>Audi官方</span>
        </div>
        <div class="right">官方活动</div>
      </div>
      <div class="bottom">
        <div class="left">
          <div>
            <div class="common-img-wrapper"></div>
          </div>
        </div>
        <div class="right">
          <p class="top">奥迪quattro杯高尔夫锦标赛-诚邀参加！</p>
          <div class="bottom">
            <div class="left">
              <span>32人</span> 已报名
            </div>
            <div class="right">进行中</div>
          </div>
        </div>
      </div>
    </div>
    <div class="placeholder"></div>
    <div class="section2">
      <div class="top">
        <span>
          <van-icon name="clock-o"/>
        </span>
        <span>08-01 10:00 至 08-15 18:00</span>
      </div>
      <div class="bottom">
        <span>
          <van-icon name="location-o"/>
        </span>
        <span>长春市宽城区什么大道100001号</span>
      </div>
    </div>
    <div class="placeholder"></div>
    <div class="section3">
      <p>活动详情</p>
      <ul>
        <li>
          <div class="common-img-wrapper"></div>
        </li>
        <li>
          <div class="common-img-wrapper"></div>
        </li>
        <li>
          <div class="common-img-wrapper"></div>
        </li>
      </ul>
    </div>
    <div class="section4">
      <div class="placeholder"></div>
      <div class="content">
        <div>
          <div>
            <span>
              <van-icon name="eye-o"/>
            </span>
            <span>57</span>
          </div>
          <div>
            <span>
              <van-icon name="good-job-o"/>
            </span>
            <span>123</span>
          </div>
          <div>
            <span>
              <van-icon name="like-o"/>
            </span>
            <span>123</span>
          </div>
        </div>
        <div>立即报名</div>
      </div>
    </div>
  </div>
</template>

<script>
import MyShareUtil from "../utils/MyShareUtil";

export default {
  name: "ActivityDetail",
  created() {
    this.setOnClickRight();
  },
  methods: {
    setOnClickRight() {
      this.$store.commit("navBar/setConfig", {
        flag: this.flag,
        onClickRight: () => {
          MyShareUtil(this);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.activity-detail {
  > .placeholder {
    height: 5px;
    background-color: #f3f3f3;
  }
  .section1 {
    padding: 20px 15px 6px 15px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 9px;
      .left {
        display: flex;
        align-items: center;
        > span:nth-child(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid #979797;
          border-radius: 50%;
          margin-right: 5px;
        }
        > span:nth-child(2) {
          font-size: 12px;
          color: $color-666;
          line-height: 12px;
        }
      }
      .right {
        background-color: #f2f2f2;
        padding: 0 2px;
        font-size: 10px;
        color: $color-BB0A30;
        line-height: 14px;
      }
    }
    > .bottom {
      display: flex;
      > .left {
        width: 90px;
        background-color: red;
        margin-right: 15px;
        > div {
          @include fixed-img-ratio(138%);
        }
      }
      > .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > .top {
          padding-right: 25px;
          font-size: 20px;
          color: $color-333;
          line-height: 30px;
        }
        > .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > .left {
            background-color: #f3f3f3;
            padding: 0 9px;
            border-radius: 14px;
            font-size: 12px;
            color: $color-666;
            line-height: 30px;
            > span {
              color: $color-BB0A30;
            }
          }
          > .right {
            font-size: 18px;
            color: $color-BB0A30;
            line-height: 18px;
          }
        }
      }
    }
  }
  .section2 {
    padding: 15px 23px;
    > div {
      display: flex;
      align-items: center;
      > span:nth-child(1) {
        margin-right: 6px;
        > i {
          font-size: 16px;
          color: $color-979797;
        }
      }
      > span:nth-child(2) {
        font-size: 14px;
        color: $color-333;
        line-height: 14px;
      }
    }
    .top {
      margin-bottom: 12px;
    }
  }
  .section3 {
    padding: 20px 15px;
    > p {
      margin-bottom: 15px;
      font-size: 16px;
      color: $color-333;
      line-height: 16px;
    }
    li {
      @include fixed-img-ratio(52%);
      background-color: red;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .section4 {
    .placeholder {
      height: 50px;
    }
    .content {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 666;
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      background-color: #fff;
      padding: 7px 0;
      border-top: 1px solid #d8d8d8;
      box-sizing: border-box;
      > div:nth-child(1) {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        > div {
          position: relative;
          display: flex;
          justify-content: center;
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
          > span:nth-child(1) {
            > i {
              font-size: 16px;
              color: $color-979797;
            }
          }
          > span:nth-child(2) {
            position: absolute;
            right: -15px;
            top: -5px;
            font-size: 10px;
            color: $color-666;
            line-height: 10px;
          }
        }
      }
      > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100%;
        background-color: #000;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
