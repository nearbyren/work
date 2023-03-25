
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
          path:'children1Detail',
          component:children1Detail 
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

