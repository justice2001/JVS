<template>
  <div id="newly-main">
    <h1 id="newly-title">最近上传</h1>
    <ul id="newly-list">
      <li class="newly-item" v-for="item in newlyList">
        <a :href="item.animeLink">
          <img class="newly-item-img" :src="item.img" alt="">
          <div class="newly-item-title">{{ item.name }}</div>
          <div class="newly-item-tag-box">
            <ul class="newly-item-tag-list">
              <li class="newly-item-tag-item" v-for="tagItem in item.tag"><a :href="tagItem.tagLink">{{ tagItem.tagName }}</a></li>
              <li class="clear-fix"></li>
            </ul>
          </div>
          <div class="newly-item-info">{{ item.info }}</div>
        </a>
      </li>
      <li class="clear-fix"></li>
    </ul>
  </div>
</template>

<script>
export default {
name: "NewlyUpload",
  data() {
    return {
      newlyList: [
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
        {img: require('../../assets/tmp/297094.jpg'), name: '测试标题', tag: [{tagName: 'Tag', tagLink: 'https://www.bilibili.com'},{tagName: 'Tag', tagLink: 'https://www.bilibili.com'}], info: '测试测试测试测试测试测试测试测试测试测试', animeLink: 'https://www.baidu.com'},
      ]
    }
  }
}
</script>

<style scoped>
  a:link,
  a:visited {
    color: #000000;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .newly-item>div {
    margin: 5px 0;
  }

  #newly-title {
    margin: 0 15px;
  }

  #newly-main {
    margin: 10px;
  }

  #newly-list {
    padding: 5px;
    margin: 0;
  }

  .newly-item {
    float: left;
    margin: 20px 10px;
    width: calc(25% - 20px);
  }

  .newly-item-img {
    width: 180px;
    height: 280px;
    background-color: #e3e3e3;
  }

  .newly-item-title {
    font-size: 20px;
    font-weight: bold;
  }

  .newly-item-tag-item {
    float: left;
    margin: 2px;
    font-size: 12px;
    padding: 4px 8px;
    background-color: skyblue;
    border-radius: 8px;
  }

  .newly-item-info {
    color: gray;
    font-size: 14px;
  }
</style>