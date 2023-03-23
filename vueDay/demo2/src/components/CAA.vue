<template>
  <h1>个人信息</h1>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
</template>

<script>
import { reactive } from 'vue'
export default {
  //组件名称
  name:'CAA',
  //接收外部参数
  props:['msg','age'],
  setup(props){
    console.log('setup',props)
    let person = reactive({
      name :props.msg,
      age:props.age
    })
    return {
      person
    }
  }
}
</script>
