<template>
  <div class="container">
    <Carousel></Carousel>
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"></Level>
        <Region @getRegion="getRegion"></Region>
        <Card
          :hasHospitalArr="hasHospitalArr"
          v-if="hasHospitalArr.length"
        ></Card>
        <el-empty
          v-else
          description="没有医院信息了..."
        />
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15, 20]"
          :disabled="false"
          :background="true"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="4">
        <Tip></Tip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { reqHospital } from "@/api/home/index";
import type { Content, HospitalResponseData } from "@/api/home/type";

import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import Tip from "./tip/index.vue";

const currentPage = ref<number>(1);
const pageSize = ref<number>(5);
const hasHospitalArr = ref<Content>([]);
const total = ref(0);
const hosType = ref<string>("");
const districtCode = ref<string>("");
console.log(hasHospitalArr);

//在这个钩子发请求
onMounted(() => {  
  getHospitalInfo();
});

//获取医院数据
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(
    currentPage.value,
    pageSize.value,
    hosType.value,
    districtCode.value
  );
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content;
    total.value = result.data.totalElements;
    console.log(result);
  }
};

//改变一页几条数据
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  getHospitalInfo();
};

//改变当前页
const handleCurrentChange = (val: number) => {
  getHospitalInfo();
  console.log(`current page: ${val}`);
};
//获取子组件等级信息
const getLevel = (item: string) => {
  hosType.value = item;
  getHospitalInfo();
};
//获取子组件等级信息
const getRegion = (item: string) => {
  hosType.value = item;
  getHospitalInfo();
};


</script>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin-top: 80px;
  .el-row {
    width: 100%;
    font-size: 16px;
    color: #807f7d;
    .el-pagination {
      margin-bottom: 20px;
    }
  }
}
</style>