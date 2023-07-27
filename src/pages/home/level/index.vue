<template>
  <h1>医院</h1>
  <div class="content">等级：
    <ul>
      <li
        :class="{active:activeFlag==''}"
        @click="handelChange('')"
      >全部</li>
      <li
        v-for="item in HOSPITAL_LEVEL"
        :key="item.id"
        @click="handelChange(item.value)"
        :class="{active:activeFlag==item.value}"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import type {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData,
} from "@/api/home/type";

const HOSPITAL_LEVEL = ref<HospitalLevelAndRegionArr>([]);
const activeFlag = ref("");

onMounted(() => {
  getLevel();
});

const getLevel = async () => {
  const result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("HosType");
  if (result.code === 200) {
    HOSPITAL_LEVEL.value = result.data;
    console.log(result);
  }
};

const handelChange = (level: string) => {
  console.log(level);
  activeFlag.value = level;
  $emit("getLevel",level)
};

let $emit=defineEmits(["getLevel"])
</script>
<script lang="ts">
export default {
  name: "Level",
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  margin-top: 20px;
  ul {
    display: flex;
    li {
      margin-left: 20px;
      &.active {
        color: #55a6fe;
      }
    }
    li:hover {
      color: #55a6fe;
      cursor: pointer;
    }
  }
}
</style>