import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');  // webpackPrefetch: true

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About',
      },
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: NotFound,
    // }
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
});

router.afterEach((route) => {
  document.title = route.meta.title;
});

export default router;
