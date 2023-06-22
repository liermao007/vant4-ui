<template>
  <div style="height: 160px">
    <div class="group-panel">
      <span class="group-title">常用功能</span>
      <van-grid :center="true" :border="false" :column-num="4">
        <van-grid-item>
          <OaIcon picName="newFlow" title="发起流程" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="fabutonggao" title="发布通知" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="send" title="发送邮件" />
        </van-grid-item>
        <van-grid-item>
          <OaIcon picName="ribao" title="工作日报" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
  <div style="height: calc(100% - 265px); padding: 10px">
    <van-tabs
      v-model:active="active"
      :style="{ height: '100%', backgroundColor: '#FFF' }"
      sticky="true"
    >
      <van-tab title="我的待办">
        <van-list :finished="finished" :height="200" finished-text="没有更多了">
          <van-cell v-for="item in getListText" :key="item.title" :title="item.title" />
        </van-list>
      </van-tab>
      <van-tab title="通知公告">
        <van-list :finished="finished" :height="200" finished-text="没有更多了">
          <van-cell v-for="item in getListText" :key="item.title" :title="item.title" />
        </van-list>
      </van-tab>
      <van-tab title="内部邮件">
        <van-list :finished="finished" :height="200" finished-text="没有更多了">
          <van-cell v-for="item in getListText" :key="item.title" :title="item.title" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup name="DashboardPage">
  import { computed, ref } from 'vue';

  const active = ref(0);

  const finished = ref(false);

  const getListText = computed(() => {
    return [
      {
        title: '💡 最新技术栈',
        details: '基于Vue3、Vant4、Vite、TypeScript、windiCss等最新技术栈开发',
      },
      {
        title: '⚡️ 轻量快速的热重载',
        details: '无论应用程序大小如何，都始终极快的模块热重载（HMR）',
      },
      {
        title: '🔩 主题配置',
        details: '具备主题配置及黑暗主题适配，且持久化保存',
      },
      {
        title: '🛠️ 丰富的 Vite 插件',
        details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
      },
      {
        title: '📊 内置 useEcharts hooks',
        details: '满足大部分图表展示，只需要写你的 options',
      },
      {
        title: '🥳 完善的登录系统、路由、Axios配置',
        details: '所有架构已搭建完毕，你可以直接开发你的业务需求',
      },
      {
        title: '🔩 主题配置',
        details: '具备主题配置及黑暗主题适配，且持久化保存',
      },
      {
        title: '🛠️ 丰富的 Vite 插件',
        details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
      },
      {
        title: '📊 内置 useEcharts hooks',
        details: '满足大部分图表展示，只需要写你的 options',
      },
      {
        title: '🥳 完善的登录系统、路由、Axios配置',
        details: '所有架构已搭建完毕，你可以直接开发你的业务需求',
      },
      {
        title: '🔩 主题配置',
        details: '具备主题配置及黑暗主题适配，且持久化保存',
      },
      {
        title: '🛠️ 丰富的 Vite 插件',
        details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
      },
      {
        title: '📊 内置 useEcharts hooks',
        details: '满足大部分图表展示，只需要写你的 options',
      },
      {
        title: '🥳 完善的登录系统、路由、Axios配置',
        details: '所有架构已搭建完毕，你可以直接开发你的业务需求',
      },
    ];
  });
</script>

<style scoped lang="less">
  :deep(.van-tabs__content) {
    height: calc(100% - 100px);
    overflow: auto;
  }

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
