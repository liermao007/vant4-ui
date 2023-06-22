<template>
  <van-index-bar>
    <van-index-anchor index="A" />
    <van-cell title="张三 17000000000" clickable @click="detail(1)" />
    <van-cell title="文本" :clickable="true" />
    <van-cell title="文本" />

    <van-index-anchor index="B" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="C" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="E" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="H" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="M" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="O" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="Z" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </van-index-bar>
</template>

<script setup lang="ts">
  const detail = (index) => {
    alert(index);
  };
</script>

<style scoped lang="less">
  h1 {
    color: red;
  }
</style>
