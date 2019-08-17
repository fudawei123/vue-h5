<template>
  <div>
    splash
    <van-button type="default" @click="gotoLogin">去登录页</van-button>
  </div>
</template>
<script>
export default {
  name: "Splash",
  methods: {
    gotoLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>


