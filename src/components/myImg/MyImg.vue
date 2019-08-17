<template>
  <van-image width="100%" height="100%" lazy-load fit="cover" :src="imgUrl"></van-image>
</template>

<script>
export default {
  name: "MyImg",
  props: {
    imgUrl: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

