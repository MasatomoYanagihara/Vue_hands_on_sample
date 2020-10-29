import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import CalendarComponent from '@/views/Calendar.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';
import NotFoundComponent from '@/views/NotFound.vue';

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

export default router;
