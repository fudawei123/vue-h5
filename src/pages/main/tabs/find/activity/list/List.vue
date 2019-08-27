<template>
  <div class="activity-list">
    <div class="van-dropdown-menu-wrapper">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
      </van-dropdown-menu>
    </div>
    <div class="my-list-wrapper">
      <my-list spacename="news">
        <template v-slot:default="slotProps">
          <div class="item">
            <div class="content">
              <div class="section section1">
                <div class="left">
                  <span>
                    <van-icon size="30px" class-prefix="my-icon" name="aodi"/>
                  </span>
                  <span>Audi官方</span>
                </div>
                <div class="right">官方活动</div>
              </div>
              <p class="section section2">{{slotProps.item.activityName}}</p>
              <div class="section section3">
                <div class="common-img-wrapper">
                  <my-img :imgUrl="slotProps.item.imgUrl"/>
                  <div class="statu">进行中</div>
                </div>
              </div>
              <div class="section section4">活动时间：08-01 10:00 至 08-15 18:00</div>
              <div class="section5">
                <div class="left">
                  <span>
                    <van-icon color="#B2B2B2" size="0.373134rem" name="location-o"/>
                  </span>
                  <span>长春</span>
                </div>
                <div class="right">
                  <div class="right-left">
                    <span>
                      <van-icon color="#979797" size="0.373134rem" name="eye-o"/>
                    </span>
                    <span>57</span>
                  </div>
                  <div class="right-right">
                    <span>
                      <van-icon color="#979797" size="0.373134rem" name="good-job-o"/>
                    </span>
                    <span>426</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </my-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityList",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.activity-list {
  display: flex;
  flex-direction: column;
  .my-list-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .item {
    padding: 0 15px;
    .content {
      padding: 20px 0 15px 0;
      border-bottom: 1px solid #eee;
    }
  }
  .section {
    margin-bottom: 10px;
  }
  .section1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      > span:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        margin-right: 13px;
      }
      > span:nth-child(2) {
        font-size: 16px;
        color: #333;
        line-height: 16px;
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
  .section2 {
    font-size: 16px;
    color: #333;
    line-height: 16px;
  }
  .section3 {
    @include fixed-img-ratio(52%);
    .van-image {
      border-radius: 6px 6px 0 6px;
      overflow: hidden;
    }
    .statu {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 70px;
      height: 20px;
      background-color: $color-BB0A30;
      border-radius: 0 10px 0 10px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 20px;
    }
  }
  .section4 {
    font-size: 12px;
    color: #333;
    line-height: 12px;
  }
  .section5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      > span:nth-child(1) {
        margin-right: 8px;
      }
      > span:nth-child(2) {
        font-size: 12px;
        color: #333;
        line-height: 12px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #bbb;
      line-height: 10px;
      .right-left {
        display: flex;
        align-items: center;
        margin-right: 24px;
        > span:nth-child(1) {
          margin-right: 8px;
        }
      }
      .right-right {
        display: flex;
        align-items: center;
        > span:nth-child(1) {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>


