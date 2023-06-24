<template>
  <van-index-bar>
    <template v-for="item in data" :key="item.index">
      <van-index-anchor :index="item.index" />
      <van-cell
        v-for="cell in item.phones"
        :title="cell.name"
        :key="cell.phone"
        :clickable="true"
        @click="goToDetail(cell)"
      />
    </template>
  </van-index-bar>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import { allUsers } from '@/api/system/user';

  let data = ref({});
  const router = useRouter();

  onBeforeMount(() => {
    allUsers().then((res) => {
      data.value = res;
    });
  });

  const goToDetail = (cell) => {
    router.push({ path: '/contactDetailPage', query: cell });
  };
</script>

<style scoped lang="less">
  h1 {
    color: red;
  }
</style>
