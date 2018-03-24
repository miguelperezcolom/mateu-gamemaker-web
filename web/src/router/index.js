import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import workflow from '@/components/workflow';
import precio from '@/components/precio';
import manual from '@/components/manual';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
      {
          path: '/workflow',
          name: 'workflow',
          component: workflow,
      },
      {
          path: '/manual',
          name: 'manual',
          component: manual,
      },
      {
          path: '/precio',
          name: 'precio',
          component: precio,
      },
  ],
});
