<template>
  <div class="content">
    <div class="left">
      <h5 class="mb-2">
        <el-icon style="vertical-align: middle">
          <House />
        </el-icon>/医院信息
      </h5>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon>
            <Fold />
          </el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon>
            <Document />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon>
            <Setting />
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon>
            <WarningFilled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon>
            <Search />
          </el-icon>
          <span>查询取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRouter, useRoute } from "vue-router";
import {
  House,
  Fold,
  Document,
  Setting,
  WarningFilled,
  Search,
} from "@element-plus/icons-vue";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetail";
//获取仓库对象
let detailStore = useDetailStore();

let $router = useRouter()
let $route = useRoute()


const changeActive = (path: string) => {
  $router.push({ path: path })
};

onMounted(() => {
  detailStore.getHospital($route.query.hoscode as string)
  //获取某一个医院科室的数据
  detailStore.getDeparment($route.query.hoscode as string);
})

</script>

<script  lang="ts">
export default {
  name: "Hospital",
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .right {
    flex: 8;
    width: 1000px;
    padding-left: 20px;
    padding-top: 20px;
  }
}
</style>