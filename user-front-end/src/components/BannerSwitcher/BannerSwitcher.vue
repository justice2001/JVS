<template>
  <div id="banner-switcher">
    <div id="banner-switcher-item-box">
      <ul id="banner-switcher-item">
        <li v-show="index === nowIdx" v-for="(item,index) in bannerData"><img :src="item.cover" alt=""></li>
      </ul>
    </div>
    <div id="idx-sel-box">
      <ul id="idx-sel">
        <li :class="{'idx-sel-act':nowIdx === index}" v-for="(item,index) in bannerData"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BannerSwitcherItem from "@/components/BannerSwitcher/BannerSwitcherItem";

export default {
  name: "BannerSwitcher",
  data() {
    return {
      bannerData: [
        {
          name: 'XXXXXXXXXX1',
          cover: 'https://i0.hdslb.com/bfs/bangumi/image/3d3a14c966a0a9aaf6c82fa5254a8646c1449455.jpg@2320w_664h.jpg'
        },
        {
          name: 'XXXXXXXXXX2',
          cover: 'https://i0.hdslb.com/bfs/bangumi/image/3d3a14c966a0a9aaf6c82fa5254a8646c1449455.jpg@2320w_664h.jpg'
        },
        {
          name: 'XXXXXXXXXX3',
          cover: 'https://i0.hdslb.com/bfs/bangumi/image/3d3a14c966a0a9aaf6c82fa5254a8646c1449455.jpg@2320w_664h.jpg'
        },
        {
          name: 'XXXXXXXXXX4',
          cover: 'https://i0.hdslb.com/bfs/bangumi/image/3d3a14c966a0a9aaf6c82fa5254a8646c1449455.jpg@2320w_664h.jpg'
        },
      ],
      nowIdx: 0
    }
  },
  methods: {

  },
  components: {
    BannerSwitcherItem
  }
}
</script>

<style scoped>
  #banner-switcher {
    position: relative;
    padding: 20px;
  }

  #banner-switcher-item {
    margin: 0;
    padding: 0;
    height: 337px;
    overflow: hidden;
  }

  ul li {
    list-style: none;
    float: left;
  }

  #banner-switcher-item li img {
    width: 100%;
  }

  #idx-sel {
    position: absolute;
    bottom: 20px;
    right: 40px;
  }

  #idx-sel li {
    width: 30px;
    height: 20px;
    border-radius: 15px;
    margin: 0 5px;
    border: red solid 3px;
  }

  .idx-sel-act {
    background-color: red;
  }
</style>