<template>
  <div class="wp">
      <div class="body">
          <img src="../assets/project-item-01.jpg" alt="">
          <img src="../assets/project-item-02.jpg" alt="">
          <img src="../assets/project-item-03.jpg" alt="">
          <img src="../assets/project-item-04.jpg" alt="">
          <img src="../assets/project-item-05.jpg" alt="">
          <img src="../assets/project-item-06.jpg" alt="">
          <img src="../assets/project-item-07.jpg" alt="">

      </div>
  </div>
</template>

<script>
export default {
    name:'Photo'
}
</script>

<style scoped>
.wp{
    float: left;
}
    .body{
        width: 750px;
        height: 400px;
        background-color:#fff;
        box-shadow: 7px 14px 44px 2px #002;
        margin-left: 150px;
        margin-top: 10px;
    }
    img{
        margin: 0;
        padding: 0;
        width: 120px;
        margin-top: 5px;
        margin-left: 25px;
    }
</style>
