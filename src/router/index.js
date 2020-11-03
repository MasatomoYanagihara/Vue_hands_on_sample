import Vue from 'vue';
import VueRouter from 'vue-router';
import { calendarRoutes } from '@/router/calendar/calendar';
import NotFoundComponent from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      title: 'home',
    },
  },
  ...calendarRoutes,
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    meta: {
      title: 'profile',
    },
  },
  {
    path: '/share',
    name: 'share',
    component: () =>
      import(/* webpackChunkName: "share" */ '@/views/Share.vue'),
    meta: {
      title: 'share',
    },
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () =>
      import(/* webpackChunkName: "signIn" */ '@/views/SignIn.vue'),
    meta: {
      title: 'sign-in',
    },
  },
  // NotFoundのルート定義は一番最後で行う
  {
    path: '*',
    component: NotFoundComponent,
    meta: {
      title: 'Not Found',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// afterEachナビゲーションガード
router.afterEach(to => {
  // meta.titleがなけらばreturn
  if (!to.meta.title) {
    return;
  }

  // meta.titleがあればtitleに表示
  document.title = to.meta.title;
});

// beforeEachナビゲーションガード
// ナビゲーションを行う前に処理を挟む
// to: ナビゲーション先のルートオブジェクト
// from: ナビゲーション元のルートオブジェクト
// next: ナビゲーションを行う関数
// router.beforeEach((to, from, next) => {
//   // 次のパスが'/sign-in'なら遷移さ
//   if (to.path === '/sign-in') {
//     next();
//     return;
//   }

//   // profile情報を保持していたら遷移させる
//   if (store.getters['profile/profile']) {
//     next();
//     return;
//   }

//   // それ以外はサインイン画面に遷移させる
//   next('/sign-in');
// });

export default router;
