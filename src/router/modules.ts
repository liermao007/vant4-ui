import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');

const routeModuleList: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'wap-home',
    },
    children: [
      {
        path: 'index',
        name: 'DashboardPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/work',
    name: 'Work',
    redirect: '/work/index',
    component: Layout,
    meta: {
      title: '办公',
      icon: 'apps-o',
    },
    children: [
      {
        path: 'index',
        name: 'WorkPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/work/index.vue'),
      },
    ],
  },
  {
    path: '/contact',
    name: 'Contact',
    redirect: '/Contact/index',
    component: Layout,
    meta: {
      title: '通讯录',
      icon: 'contact',
    },
    children: [
      {
        path: 'index',
        name: 'ContactPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/contact/index.vue'),
      },
    ],
  },
  {
    path: '/contactDetailPage',
    name: 'ContactDetailPage',
    meta: {
      title: '联系人信息',
      innerPage: true,
    },
    component: () => import('@/views/contact/detail.vue'),
  },
  {
    path: '/my',
    name: 'My',
    redirect: '/my/index',
    component: Layout,
    meta: {
      title: '我的',
      icon: 'manager',
    },
    children: [
      {
        path: 'index',
        name: 'MyPage',
        meta: {
          keepAlive: false,
          hiddenHeader: true,
        },
        component: () => import('@/views/my/index.vue'),
      },
    ],
  },

  // my innerPage
  {
    path: '/editUserInfo',
    name: 'EditUserInfo',
    meta: {
      title: '编辑个人信息',
      innerPage: true,
    },
    component: () => import('@/views/my/EditUserInfo.vue'),
  },
  {
    path: '/editNickname',
    name: 'EditNickname',
    meta: {
      title: '修改昵称',
      innerPage: true,
      keepAlive: false,
    },
    component: () => import('@/views/my/EditNickname.vue'),
  },
  {
    path: '/editSign',
    name: 'EditSign',
    meta: {
      title: '修改签名',
      innerPage: true,
    },
    component: () => import('@/views/my/EditSign.vue'),
  },
  {
    path: '/accountSetting',
    name: 'AccountSetting',
    meta: {
      title: '账号与安全',
      innerPage: true,
    },
    component: () => import('@/views/my/AccountSetting.vue'),
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    meta: {
      title: '修改登录密码',
      innerPage: true,
    },
    component: () => import('@/views/my/ChangePassword.vue'),
  },
  {
    path: '/themeSetting',
    name: 'ThemeSetting',
    meta: {
      title: '主题设置',
      innerPage: true,
    },
    component: () => import('@/views/my/ThemeSetting.vue'),
  },
];

export default routeModuleList;
