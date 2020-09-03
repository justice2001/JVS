<template>
  <div id="home-page">
    <div id="banner-switcher-box" class="box">
      <banner-switcher></banner-switcher>
    </div>
    <div id="weekly-box" class="box">
      本周动画放送表
    </div>
  </div>
</template>

<script>
import BannerSwitcher from "@/components/BannerSwitcher/BannerSwitcher";

export default {
  name: 'Home',
  components: {
    BannerSwitcher
  }
}
</script>

<style scoped>
  .box {
    margin: 0 auto;
    width: 1200px;
  }

  #banner-switcher-box {
  }
</style>
