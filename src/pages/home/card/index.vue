<template>
  <div class="card">
    <el-card class="box-card" shadow="hover" v-for="item in hasHospitalArr" :key="item.id"
      @click="goDetail(item)">
      <div class="content">
        <div class="left">
          <div>{{ item.hosname }}</div>
          <div class="tip">
            <span>
              <svg t="1689753635096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1491" width="16" height="16">
                <path
                  d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                  p-id="1492"></path>
              </svg>
              <span>{{ item.param.hostypeString }}</span>
            </span>
            <span>
              <svg t="1689753746598" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2657" width="16" height="16">
                <path
                  d="M512 64c-256 0-460.8 208-460.8 460.8s208 460.8 460.8 460.8 460.8-208 460.8-460.8S768 64 512 64zM512 940.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S742.4 940.8 512 940.8z"
                  p-id="2658"></path>
                <path
                  d="M809.6 544l-278.4 0 0-281.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4l0 307.2c0 12.8 9.6 22.4 22.4 22.4 0 0 3.2 0 3.2 0l297.6 0c12.8 0 22.4-9.6 22.4-22.4C832 553.6 822.4 544 809.6 544z"
                  p-id="2659"></path>
              </svg>
              <span>每天{{ item.bookingRule.releaseTime }}放号</span>
            </span>
          </div>
        </div>
        <div class="right">
          <img :src="`data:image/jpeg;base64,${item.logoData}`" alt="">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"
let $router = useRouter()

const goDetail = (hoscode: any) => {  
  $router.push({ path: "/hospital/register", query: {hoscode:hoscode.hoscode} });
};




defineProps(["hasHospitalArr"]);


</script>
<script  lang="ts">
export default {
  name: "Card",
};
</script>


<style scoped lang="scss">
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box-card {
    width: 48%;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tip {
        display: flex;
        justify-content: space-between;
        color: #7f7e83;
      }
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>