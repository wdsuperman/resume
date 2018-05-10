<template>
  <div>
      <Logo/>
      <About/>
      <Boke/>
      <Works/>
  </div>
</template>

<script>
import Logo from "./Logo";
import About from "./About";
import Boke from "./Boke";
import Works from "./Works";
export default {
    name:'Right',
    components:{
        Logo,
        About,
        Boke,
        Works
    }
}
</script>

<style scoped>
    div{
        margin-left: 50px;
        width: 200px;
        margin-top: 14px;
    }
    
</style>
