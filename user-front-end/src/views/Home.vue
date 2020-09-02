<template>
  <div id="home-page">
    <div id="banner-switcher-box">
      <banner-switcher></banner-switcher>
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
  #banner-switcher-box {
    margin: 0 auto;
    width: 1200px;
  }
</style>
