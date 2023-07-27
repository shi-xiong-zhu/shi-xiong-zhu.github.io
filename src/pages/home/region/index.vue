<template>
  <div>
    <div class="content">
      <div class="title">地区：</div>
      <ul>
        <li
          :class="{active:activeFlag==''}"
          @click="handelChange('')"
        >全部</li>
        <li
          v-for="item in HOSPITAL_REGION"
          :key="item.id"
          :class="{active:activeFlag==item.value}"
          @click="handelChange(item.value)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import type {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData,
} from "@/api/home/type";

const HOSPITAL_REGION = ref<HospitalLevelAndRegionArr>([]);
const activeFlag = ref("");

onMounted(() => {
  getRegion();
});

const getRegion = async () => {
  const result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
  if (result.code === 200) {
    HOSPITAL_REGION.value = result.data;
  }
};

const handelChange = (region: string) => {
  console.log(region);
  activeFlag.value = region;
  $emit("getRegion",region)
};

let $emit=defineEmits(["getRegion"])
</script>
<script lang="ts">
export default {
  name: "Region",
};
</script>

<style scoped lang="scss">
.content {
  font-size: 16px;
  color: #807f7d;
  display: flex;
  margin-top: 20px;
  .title {
    width: 61px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-left: 20px;
      margin-bottom: 20px;
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