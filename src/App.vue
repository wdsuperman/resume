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
.app{
  width: 100%;
  margin: 0 auto;
}
.app>div{
  width: 1350px;
  margin: 0 auto;
}
</style>

