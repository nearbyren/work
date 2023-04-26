<template>
  <h1>children1Detail</h1>
  <!-- <h1>{{$route.query.id}}</h1>
  <h1>{{$route.query.title}}</h1> -->

  <h1>{{id}}</h1>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'children1Detail',
  //接收路由数据
  props:['id','title']

}
</script>





