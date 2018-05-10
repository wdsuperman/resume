<template>
  <div id="app">
    <Resume/>
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
em,i{
  font-style: normal;
}
</style>

