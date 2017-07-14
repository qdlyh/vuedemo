import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import Hi3 from '@/components/Hi3'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      //页面404
      path: '*',
      component: Error
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params,
      //路由文件中我们只能写一个beforeEnter
      beforeEnter: (to, from, next) => {
        console.log('进入params模板');
        console.log(to);
        console.log(from)
        next();
      },
    },
    {
      path: '/hi3',
      component: Hi3,
      alias: '/hao'
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      //子路由
      children: [
        { path: '/', name: 'Hello/hi', component: Hi },
        { path: '/hi1', name: 'hi1', component: Hi1 },
        { path: '/hi2', name: 'hi2', component: Hi2 },
      ]
    }
  ]
})
