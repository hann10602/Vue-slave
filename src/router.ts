import { createRouter, createWebHistory } from 'vue-router'
import VeeValidate from './components/VeeValidate.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionComponent from './components/OptionComponent.vue'
import UserDetail from './components/UserDetail.vue'
import OrderList from './components/vue-query/OrderList.vue'
import UserList from './components/vue-query/UserList.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/form',
      component: VeeValidate,
    },
    {
      path: '/composition',
      component: CompositionComponent,
    },
    {
      path: '/option',
      component: OptionComponent,
    },
    {
      path: '/user/:id?',
      name: 'user',
      component: UserDetail,
    },
    {
      path: '/order-list',
      name: 'order-list',
      component: OrderList,
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: UserList,
    },
    // {
    //   path: '/query',
    //   name: 'vue-query',
    //   component: VueQuery,
    // },
  ],
})
