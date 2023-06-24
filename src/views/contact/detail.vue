<template>
  <div>
    <NavBar />
    <div style="padding-top: 10px">
      <van-form>
        <van-cell-group inset>
          <van-field v-model="info.name" label="姓名" readonly />
          <van-field v-model="info.phone" label="手机号" readonly />
          <van-field v-model="info.email" label="邮箱" readonly />
          <van-field v-model="info.grade" label="职务" readonly />
          <van-field v-model="info.dept" label="科室" readonly />
        </van-cell-group>
      </van-form>
    </div>
    <div style="height: 145px; padding: 0 9px; margin-top: 10px">
      <div class="group-panel">
        <van-grid :center="true" :border="false" :column-num="3" gutter="10">
          <van-grid-item @click="makePhoneCall">
            <OaIcon picName="dianhua" title="打电话" size="30" />
          </van-grid-item>
          <van-grid-item>
            <OaIcon picName="youxiang" title="发邮件" size="30" />
          </van-grid-item>
          <van-grid-item>
            <OaIcon picName="tongzhi" title="发通知" size="30" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import NavBar from '@/views/my/components/NavBar.vue';

  const route = useRoute();
  const info = ref(route.query);

  const makePhoneCall = () => {
    window.location.href = 'tel:' + info.value.phone;
  };
</script>

<style scoped lang="less"></style>
