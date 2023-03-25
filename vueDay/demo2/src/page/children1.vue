<template>
  <h1>children1</h1>
  <ul>
      <li v-for="m in message">
        <!-- <router-link :to="'/home/children1/children1Detail?id=${ m.id }&title=${ m.title }'">
          {{m.id}}-{{m.title}}
        </router-link> -->
        <router-link :to="{
          path:'/home/children1/children1Detail',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.id}}-{{m.title}}
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'children1',
  setup(){
    let message =[
      {id:'001',title:"title1"},
      {id:'002',title:"title2"},
      {id:'003',title:"title3"}
    ]
  return {
    message
  }
  }
}
</script>





