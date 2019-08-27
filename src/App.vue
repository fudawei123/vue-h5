<template>
  <div id="app" class="flex-column">
    <template v-if="flag">
      <van-nav-bar
        :fixed="true"
        :title="title"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon color="#000" size="0.533049rem" name="arrow-left" slot="left"/>
        <van-icon
          color="#000"
          size="0.533049rem"
          class-prefix="my-icon"
          :name="rightIcon"
          slot="right"
        />
      </van-nav-bar>
      <div class="nav-bar"></div>
    </template>
    <router-view v-if="flag1" class="container"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("navBar", ["flag", "title", "rightIcon", "onClickRight"]),
    ...mapState("user", ["userInfo", "isLogged"])
  },
  data() {
    return {
      flag1: true
    };
  },
  watch: {
    isLogged(newVal) {
      if (newVal) {
        this.flag1 = false;
        setTimeout(() => {
          this.flag1 = true;
        });
      }
    }
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
    height: 1.226667rem;
  }
  // .van-nav-bar {
  //   background-color: rgba(255, 255, 255, 0);
  //   color: #000;
  // }
}
</style>
