<template>
  <div>
      <router-link to="/bokepage">Blog</router-link>
  </div>
</template>

<script>
export default {
    name:'Boke'
}
</script>

<style scoped>
div{
        width: 200px;
        border-radius: 2px;
        height: 65px;
        background-color: #fff;
        float: left;
        cursor:pointer;
        margin-top: 20px;
        text-align: center;
        line-height: 65px;
        font-size: 22px;
        font-weight: bold;
    }
    a{
        color:#2c2c2c;
        text-decoration: none;
        display: block;
        transition: all .2s linear;
    }
a:hover{
    color:rgb(59, 22, 161);
    box-shadow: 4px 6px 15px 0px rgb(24, 24, 24);
}
</style>
