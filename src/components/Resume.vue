<template>
  <div class="wrap">
      <div class="pic">
          <div>
          <router-view :t='hhh'></router-view>
          <Right style="float:left" />
          </div>
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
    },
    computed:{
        hhh(){
            return this.$store.state.comment.name
        }
    }
}
</script>

<style scoped>
    .pic{
        width: 100%;
        padding: 20% 0 20% 0;
        background-image: url('../assets/timg.jpeg');
        background-size: cover;
        overflow: hidden;
    }
    .pic>div{
        width: 1150px;
        margin: 0 auto;
    }
</style>

