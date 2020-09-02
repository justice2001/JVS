<template>
  <div id="app">
    <header>
      <ul id="nav">
        <li><a href="/">首页</a></li>
        <li><a href="/">番剧索引</a></li>
        <li><a href="/">连载动画</a></li>
        <li><a href="/">完结动画</a></li>
        <li><a href="/">资讯</a></li>
        <li><a href="/">新番时间表</a></li>
        <li><a href="/">Colter的图片站</a></li>
      </ul>

      <div id="login"><a href="/">登陆</a></div>

      <div id="search">
        <label>
          <input type="text" id="search-text" placeholder="请输入关键词">
        </label>
        <input type="button" id="search-btn" value="搜索">
      </div>

  </header>
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  input:focus {
    outline: none;
  }
  button {
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }
  a:visited,
  a:link {
    text-decoration: none;
    color: #ffffff;
  }

  header {
    background-image: url("https://i0.hdslb.com/bfs/archive/b98c0f94b7aa520f64bb48f0b7c16dc21a179fcc.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
  }

  #nav {
    padding: 0;
    margin: 0;
  }
  #nav li {
    list-style: none;
    float: left;
    padding: 15px;
  }
  #nav li a:link,
  #nav li a:visited,
  #login {
    color: #ffffff;
    font-size: 14px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }
  #nav li a:hover {
    cursor: pointer;
  }

  #search {
    float: left;
    padding: 10px;
  }
  #search input {
    float: left;
    height: 36px;
    padding: 0 10px;
    border: none;
  }
  #search-text {
    border-radius: 5px 0 0 5px;
  }
  #search-btn {
    display: block;
    float: left;
    color: #000000;
    background-color: #e3e3e3;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 26px;
    height: 26px;
    border-radius: 0 5px 5px 0;
  }
  #search-btn:hover {
    cursor: pointer;
  }

  #login {
    float: right;
    padding: 15px 25px;
  }
</style>
