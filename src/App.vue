<template>
  <div id="app" class="flex-column">
    <template v-if="flag">
      <van-nav-bar
        :fixed="true"
        :title="title"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="arrow-left" slot="left"/>
        <van-icon :name="rightIcon" slot="right"/>
      </van-nav-bar>
      <div class="nav-bar"></div>
    </template>
    <router-view class="container"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("navBar", ["flag", "title", "rightIcon", "onClickRight"])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  .nav-bar {
    height: 50px;
  }
}
</style>
