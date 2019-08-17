<template>
  <div class="tabs flex-column">
    <router-view class="container"/>
    <div class="tabbar"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
const map = {
  0: "find",
  3: "mine"
};
export default {
  name: "Tabs",
  data() {
    return {
      active: 0
    };
  },
  watch: {
    active(newVal, oldVal) {
      this.$router.push(`/${map[newVal]}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  .tabbar {
    height: 50px;
  }
}
</style>


