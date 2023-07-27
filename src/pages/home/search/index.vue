<template>
  <div class="search">
    <el-autocomplete :fetch-suggestions="querySearchAsync" :trigger-on-focus="false" placeholder="请你输入医院名称"
      v-model="hosname" @select="goDetail" />
    <el-button type="primary" size="default" :icon="Search" :trigger-on-focus="false">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"

import { Search } from "@element-plus/icons-vue";
import { reqHospitalInfo } from "@/api/home/index";
import type { HospitalInfo } from "@/api/home/type";

let $router = useRouter()

const hosname = ref<string>("");

const querySearchAsync = async (hosname: string, cb: any) => {
  const result: HospitalInfo = await reqHospitalInfo(hosname);
  const showData = result.data.map((item) => {
    return {
      value: item.hosname,
      hoscode: item.hoscode,
    }
  });
  console.log(showData);
  cb(showData)
};

const goDetail = (item: any) => {
  console.log(item.hoscode);

  $router.push({ path: "/hospital/register", query: { hoscode: item.hoscode } })
};
</script>

<script  lang="ts">
export default {
  name: "Search",
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>