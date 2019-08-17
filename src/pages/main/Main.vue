<template>
  <div class="main flex-column">
    <keep-alive>
      <router-view class="container" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view class="container" v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
</style>


