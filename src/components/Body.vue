<template>
  <div class="wp">
      <div class="body">
          <div class="left">
              <h1>个人简历</h1>
              <p>欢迎来到我的个人简历</p>
              <em><svg t="1525937468092" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1739" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs></defs><path d="M993.882353 271.058824l-481.882353 240.941176-481.882353-240.941176v-120.470589h963.764706v120.470589z" fill="#2c2c2c" p-id="1740"></path><path d="M30.117647 331.294118v542.117647h963.764706v-542.117647l-481.882353 240.941176-481.882353-240.941176z" fill="#2c2c2c" p-id="1741"></path></svg><i>E-mail</i>:425233548@qq.com</em>
              <em><img src="../assets/wx.jpg" alt=""><i>WeiXin</i>:laks45237</em>
              <em><svg t="1525937512688" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3346" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs></defs><path d="M608 19.2c-32 0-57.6 0-89.6 6.4-6.4 0-12.8 12.8-12.8 19.2C505.6 57.6 512 64 524.8 57.6 550.4 51.2 576 51.2 608 51.2c211.2 0 390.4 172.8 390.4 390.4 0 83.2-25.6 166.4-76.8 236.8-6.4 6.4-6.4 19.2 0 19.2 0 0 6.4 0 6.4 0 6.4 0 6.4 0 12.8-6.4 57.6-70.4 83.2-160 83.2-256C1024 211.2 838.4 19.2 608 19.2zM608 185.6c-19.2 0-44.8 0-64 6.4-6.4 0-12.8 12.8-12.8 19.2 0 6.4 12.8 12.8 19.2 12.8 19.2-6.4 38.4-6.4 57.6-6.4 134.4 0 243.2 108.8 243.2 243.2 0 44.8-12.8 83.2-32 121.6-6.4 6.4 0 19.2 6.4 19.2 0 0 6.4 0 6.4 0 6.4 0 12.8 0 12.8-6.4 25.6-38.4 38.4-89.6 38.4-134.4C876.8 307.2 755.2 185.6 608 185.6zM678.4 556.8c0 0 6.4 0 6.4 0 6.4 0 12.8 0 12.8-6.4 12.8-19.2 19.2-44.8 19.2-70.4 0-76.8-64-140.8-140.8-140.8-12.8 0-25.6 0-32 6.4-6.4 0-12.8 12.8-12.8 19.2 0 6.4 12.8 12.8 19.2 12.8 6.4 0 19.2 0 25.6 0 64 0 108.8 51.2 108.8 108.8 0 19.2-6.4 38.4-12.8 57.6C672 544 672 550.4 678.4 556.8zM640 672c-57.6 0-134.4 64-134.4 64-185.6-25.6-326.4-185.6-326.4-384 0-6.4 0-19.2 0-25.6l6.4 0c6.4 0 12.8 0 12.8 0 89.6 0 160-70.4 160-160S294.4 0 204.8 0c-64 0-121.6 38.4-147.2 89.6 0 6.4-6.4 12.8-6.4 19.2C19.2 185.6 0 268.8 0 352 0 710.4 275.2 998.4 620.8 1024l19.2 0c96 0 172.8-76.8 172.8-172.8S736 672 640 672z" p-id="3347"></path></svg><i>Phone</i>:13200040900</em>
          </div>
          <div class="right">
              <img src="../assets/header.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Body'
}
</script>

<style scoped>
.wp{
    float: left;
}
    .body{
        width: 750px;
        height: 400px;
        background-color:#fff;
        box-shadow: 7px 14px 44px 2px #002;
        margin-left: 150px;
        margin-top: 10px;
    }
    .left{
        padding-top: 20px;
        width: 50%;
        float: left;
    }
    h1{
        font-size: 50px;
        margin-left: 50px;
        border-left: 4px solid #000;
        text-indent: 20px;
    }
    .left>p{
        font-size: 24px;
        padding: 40px 0 60px 55px;
    }
    .left>em{
        display: block;
        font-size: 16px;
        margin-left: 60px;
        margin-top: 10px;
        line-height: 20px;
    }
    .left>em>i{
        font-weight: bold;
        font-size: 18px;
    }
    .left>em>img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .left>em>svg{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .right{
        width: 50%;
        background-color:#fff;
        height: 100%;
        float: left;
    }
    .right>img{
        width: 100%;
        height: 400px;
    }
</style>
