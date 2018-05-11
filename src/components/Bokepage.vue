<template>
  <div class="wp">
      <div class="body">
            <el-carousel :interval="4000" type="card" height="250px">
                <el-carousel-item v-for="item in imgs" :key="item.id">
                    <img class="pics" :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
      </div>
  </div>
</template>

<script>
import { Carousel,CarouselItem } from 'element-ui';
import img1 from '../assets/a2.jpg'
import img2 from '../assets/4.jpg'
import img3 from '../assets/5.jpg'
import img4 from '../assets/6.png'
export default {
    name:'Bokepage',
    data: ()=>({
        imgs:[
            {src:img1,id:1},
            {src:img2,id:2},
            {src:img3,id:3},
            {src:img4,id:4},
        ]
    })
}
</script>

<style scoped>
.wp{
    float: left;
}
    .body{
        padding-top: 70px;
        width: 750px;
        height: 400px;
        background-color:rgb(233, 233, 233);
        box-shadow: 7px 14px 44px 2px #002;
        margin-left: 150px;
        margin-top: 10px;
    }
    h1{
        font-size: 170px;
    }
    .el-carousel__item img {
    width: 375px;
    height: 250px;
  }
  .el-carousel__indicators--outside button{
      background-color: #000;
  }
  
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */

</style>
