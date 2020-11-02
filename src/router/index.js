import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import CalendarComponent from '@/views/Calendar.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';
import NotFoundComponent from '@/views/NotFound.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    meta: {
      title: 'home',
    },
  },
  {
    path: '/calendar/:type',
    name: 'calendar',
    component: CalendarComponent,
    props: true,
    meta: {
      title: 'calendar',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent,
    meta: {
      title: 'profile',
    },
  },
  {
    path: '/share',
    name: 'share',
    component: ShareComponent,
    meta: {
      title: 'share',
    },
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInComponent,
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
router.beforeEach((to, from, next) => {
  // 次のパスが'/sign-in'なら遷移させる
  if (to.path === '/sign-in') {
    next();
    return;
  }

  // profile情報を保持していたら遷移させる
  if (store.getters['profile/profile']) {
    next();
    return;
  }

  // それ以外はサインイン画面に遷移させる
  next('/sign-in');
});

export default router;
