import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import CalendarComponent from '@/views/Calendar.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';

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
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent,
  },
  {
    path: '/share',
    name: 'share',
    component: ShareComponent,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInComponent,
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
