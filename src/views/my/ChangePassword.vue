<template>
  <div>
    <NavBar />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="oldPassword"
          type="password"
          name="旧密码"
          label="旧密码"
          placeholder="旧密码"
          :rules="[{ required: true, message: '请填写旧密码' }]"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
          v-model="newPassword"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
      </van-cell-group>
      <van-cell-group inset>
        <van-field
          v-model="confirmPassword"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请填写确认密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import { showDialog } from 'vant';
  import { ref } from 'vue';

  const oldPassword = ref('');
  const newPassword = ref('');
  const confirmPassword = ref('');

  const onSubmit = () => {
    if (newPassword.value !== confirmPassword.value) {
      showDialog({ title: '提示', message: '两次填写的密码不一致' });
      return;
    }
  };
</script>

<style scoped></style>
