<template>
  <div id="app">
    <div>
      <Resume/>
    </div>
  </div>
</template>

<script>
import Resume from "./components/Resume";
export default {
  name: 'app',
  components:{
    Resume
  },
  created(){
    this.$store.dispatch({ type: 'cz' })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
em,i,p,a,h1,h2{
  font-style: normal;
  font-family: '微软雅黑';
  font-family: 微软雅黑;
}

</style>

