<template>
  <div class="wrap">
      <div class="pic">
          <router-view></router-view>
          <Right style="float:left" />
      </div>
  </div>
</template>

<script>
import Body from "./Body";
import Right from "./Right";
import Aboutme from "./Aboutme";
import Photo from "./Photo";
export default {
    name:'Resume',
    components:{
        Body,
        Right,
        Aboutme,
        Photo
    }
}
</script>

<style scoped>
    .pic{
        padding-top: 106px;
        padding-bottom: 107px;
        background-image: url('../assets/timg.jpeg');
        background-size: cover;
        overflow: hidden;
    }
    .wrap{
        width: 100%;
    }
</style>

