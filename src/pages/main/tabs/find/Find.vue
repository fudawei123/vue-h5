<template>
  <div class="find">
    <van-field v-model="token" placeholder="请输入用户名"/>
    <van-button type="default" @click="gotoNews('news')">去资讯列表</van-button>
    <van-button type="default" @click="gotoNews('activityList')">去活动列表</van-button>
    <van-button type="default" @click="showMyShare">显示分享</van-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Find",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapState("user", ["token"])
  },
  methods: {
    gotoNews(path) {
      this.$router.push(`/${path}`);
    },
    showMyShare() {
      // 直接调用
      // 传入配置对象，默认传入的所有对象全都当做 props 传入组件
      // 除了在调用 createAPI 的时候传入了 events，这里对应的就是
      // on{event name} 会被当做事件回调处理
      const instance = this.$createMyShare({
        content: "My Hello Content"
        // onClick(e) {
        //   console.log("Hello component clicked.");
        // }
      });

      instance
        .$on("click", () => {
          console.log("click");
        })
        .$on("close", () => {
          instance.remove();
        });
    }
  }
};
</script>

<style>
</style>


