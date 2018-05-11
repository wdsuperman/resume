<template>
  <div>
      <router-link class="logo" to="/"></router-link>
  </div>
</template>
<script>
export default {
    name:'Logo'
}
</script>

<style scoped>
    div{
        width: 200px;
        border-radius: 2px;
        height: 80px;
        background-color: #fff;
        float: left;
        cursor:pointer;
    }
    .logo{
        background-image: url('../assets/logo.png');
        background-color:#2c2c2c;
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
