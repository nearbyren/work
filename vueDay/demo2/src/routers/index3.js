
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
        meta:{title:'标题-children1'},
        component:children1,
         children:[{
             name:'detail',
             path:'children1Detail',
             meta:{title:'标题-detail'},
            //params传递参数方式
            //  path:'children1Detail/:id/:title',
             component:children1Detail,

             //第二种写法，将路由接收的所有params参数，以props形式传给data组件
            //  props:true,
             //接收参数
             props($route){
              return {id:$route.query.id,title:$route.query.title}
             },
             //独享路由
             beforeEnter:(to,from,next)=>{
                   //到此路由才能继续执行
                if(to.path==='/home/children1/children1Detail'){
                  if(localStorage.getItem('school')==='lr'){
                    next()
                  }else{
                    alert('你暂无权限')
                  }
                }else{ 
                  next()
                }
             }
        }]
      },{
        path:'children2',
        component:children2,
        meta:{title:'标题-children2'},
      }]
    },
    {
        path:"/about",
        // component:() => import("../router/About.vue")
        component:About,
    }
  ],
});

//前置路由
//路由权限处理
// router.beforeEach((to,from,next)=>{
//   console.log(to,from)

//   //到此路由才能继续执行
//   if(to.path==='/home/children1/children1Detail'){
//     if(localStorage.getItem('school')==='l2r'){
//       next()
//     }else{
//       alert('你暂无权限')
//     }
//   }else{ 
//     next()
//   }
// })

//后置路由 处理通过点击后标题栏更新问题
router.afterEach((to,from)=>{
  console.log(to,from)
  document.title = to.meta.title || 'lr'
})


export default router

