
import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../page/Home.vue'
import About from '../page/About.vue'
import children1 from '../page/children1.vue'
import children2 from '../page/children2.vue'
import children1Detail from '../page/children1Detail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component:Home,
      children:[{
        path:'children1',
        component:children1,
         children:[{
             name:'detail',
             path:'children1Detail',
            //params传递参数方式
            //  path:'children1Detail/:id/:title',
             component:children1Detail,

             //第二种写法，将路由接收的所有params参数，以props形式传给data组件
            //  props:true,
             //接收参数
             props($route){
              return {id:$route.query.id,title:$route.query.title}
             }
           
        }]
      },{
        path:'children2',
        component:children2,
       
      }]
    },
    {
        path:"/about",
        // component:() => import("../router/About.vue")
        component:About,
    }
  ],
});

export default router

