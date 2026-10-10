import { createRouter, createWebHistory } from 'vue-router'
// 首页 Home.vue
import home from '../views/Home.vue'
//08事件对象
import EventObj from '../views/EventObj.vue'
//09事件修饰符
import EventDemo from '../views/EventDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    //08 事件对象
    {
      path: '/eventObj',
      name: 'EventObj',
      component: EventObj
    },
    //09 事件修饰符
    {
      path: '/eventDemo',
      name: 'EventDemo',
      component: EventDemo
    }
  ]
})

export default router
