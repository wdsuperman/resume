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
        padding: 20% 0 20% 0;
        background-image: url('../assets/timg.jpeg');
        background-size: cover;
        overflow: hidden;
    }
</style>

