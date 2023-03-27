<template>
  <h1>children1</h1>
  <ul>
      <li v-for="m in message">
        <!-- <router-link :to="'/home/children1/children1Detail?id=${ m.id }&title=${ m.title }'">
          {{m.id}}-{{m.title}}
        </router-link> -->
        <router-link :to="{
          name:'detail',
          // path:'/home/children1/children1Detail',
          query:{
            id:m.id,
            title:m.title
          },
          // params:{
          //   id:m.id,
          //   title:m.title
          // }
        }">
          {{m.id}}-{{m.title}}
        </router-link>
        <button @click="showPush(m)">push</button>
        <button @click="showReplace(m)">replace</button>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
</template>

<script>
// 引入路由
import { useRouter } from 'vue-router'

export default {
  name: 'children1',
  setup(){
    //全局中引入这个方法
    const router = useRouter()
    let message =[
      {id:'001',title:"title1"},
      {id:'002',title:"title2"},
      {id:'003',title:"title3"}
    ]
    function showPush(m){
      // alert('replace')
      router.push({
          name:'detail',
          // path:'/home/children1/children1Detail',
          query:{
            id:m.id,
            title:m.title
          },
          // params:{
          //   id:m.id,
          //   title:m.title
          // }
        })
    }
    function showReplace(m){
      // alert('replace')
      router.replace({
          name:'detail',
          // path:'/home/children1/children1Detail',
          query:{
            id:m.id,
            title:m.title
          },
          // params:{
          //   id:m.id,
          //   title:m.title
          // }
        })
    }
    return {
      message,
      showPush,
      showReplace
    }
  }
}
</script>





