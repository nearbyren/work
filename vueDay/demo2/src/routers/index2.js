// 构建路由

import Vue from "vue"

import VueRouter from 'vue-router'
import CAA from '../components/CAA'
import CZA from '../components/CZA'
//vue注册路由
Vue.use(VueRouter);

//创建路由

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',name:'home',Comment:CAA},
    {path:'/about',name:'about',Comment:CZA}
  ]
})
//导出路由实例
export default router