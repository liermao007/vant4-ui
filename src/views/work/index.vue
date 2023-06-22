<template>
  <div style="margin-bottom: 60px">
    <div class="group-panel">
      <span class="group-title">工作流程</span>
      <van-grid :center="true" :border="false" :column-num="4">
        <van-grid-item>
          <OaIcon picName="newFlow" title="发起流程" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="shenhe" title="待办流程" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="yiban" title="已办流程" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="myFlow" title="我的流程" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="group-panel">
      <span class="group-title">内部邮箱</span>
      <van-grid :center="true" :border="false" :column-num="4">
        <van-grid-item>
          <OaIcon picName="send" title="发送邮件" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="email" title="已收邮件" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="liebiao" title="已发邮件" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="caogao" title="草稿箱" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="group-panel">
      <span class="group-title">消息发布</span>
      <van-grid :center="true" :border="false" :column-num="4">
        <van-grid-item>
          <OaIcon picName="fabutonggao" title="发布通告" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="notice" title="我的通告" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="fabuxinwen" title="发布新闻" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="xinwen" title="新闻中心" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="group-panel">
      <span class="group-title">其他应用</span>
      <van-grid :center="true" :border="false" :column-num="4">
        <van-grid-item>
          <OaIcon picName="ribao" title="工作日报" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="zhoubao" title="工作周报" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .group-panel {
    background-color: #fff;
    padding: 10px;
    margin: 15px;
    border-radius: 10px;
  }

  .group-title {
    font-size: 3.6vw;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 1.5vw;
  }
</style>
