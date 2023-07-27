<template>
  <div class="container">
    <HospitalTop class="left"></HospitalTop>
    <div class="outlet">
      <router-view></router-view>
    </div>
    <HospitalBottom class="right"></HospitalBottom>

    <!-- 登录组件 -->
    <Login v-if="userStore.visiable"></Login>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .outlet{
    margin: 0 auto;
    margin-bottom: 80px;
  }
}
</style>
