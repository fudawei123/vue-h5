<template>
  <div>
    login
    <van-button type="default" @click="gotoMain">去首页</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  created() {
    this.setToken("asdadasdasdasdadasd");
  },
  methods: {
    ...mapActions("user", ["setToken"]),
    gotoMain() {
      this.$router.push("/main");
    }
  }
};
</script>

<style>
</style>


