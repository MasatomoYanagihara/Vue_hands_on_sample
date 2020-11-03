export const calendarRoutes = [
  {
    path: '/calendar/:type',
    name: 'calendar',
    component: () =>
      import(/* webpackChunkName: "calendar" */ '@/views/Calendar.vue'),
    props: true,
    meta: {
      title: 'calendar',
    },
  },
];
