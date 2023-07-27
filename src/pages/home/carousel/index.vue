<template>
  <el-carousel
    height="350px"
    class="lunbotu"
  >
    <el-carousel-item
      v-for="item in 4"
      :key="item"
    >
      <img
        src="../../../assets/images/web-banner-1.png"
        alt=""
      >
    </el-carousel-item>
  </el-carousel>
</template>
  
<script setup lang="ts">
</script>
<script  lang="ts">
export default {
  name: "Carousel",
};
</script>
  
<style scoped lang="scss">
.lunbotu {
  // 组件直接粘进去没宽度
  width: 100%;
  img {
    width: 100%;
    height:350px;
  }
}
</style>