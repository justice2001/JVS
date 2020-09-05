<template>
  <div id="home-page">
    <div id="banner-switcher-box" class="box">
      <banner-switcher></banner-switcher>
    </div>
    <div id="two-col-box" class="box">
<!--      左边 900-->
      <div id="left-box">
        <div id="weekly-box">
          <bangumi-shin></bangumi-shin>
        </div>
      </div>
<!--      右边 300  -->
      <div id="right-box">

      </div>
<!--      清除浮动-->
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
import BannerSwitcher from "@/components/BannerSwitcher/BannerSwitcher";
import BangumiShin from "@/components/BangumiShin/BangumiShin";

export default {
  name: 'Home',
  components: {
    BannerSwitcher,
    BangumiShin
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

  #two-col-box {
  }

  #left-box {
    float: left;
    width: 800px;
  }

  #right-box {
    float: right;
    width: 400px;
    height: 300px;
    background-color: #efefef;
  }

</style>
