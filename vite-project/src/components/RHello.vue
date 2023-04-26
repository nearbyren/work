<template>
  <div>
    <h1>我叫 {{person.name}}</h1>
    <button v-on:click="upAge()">点我更新年龄</button>
  </div>
</template>

<script>
import {  reactive } from 'vue'
export default {
  name: 'RHELLO',
  setup(){
    let person  = reactive({
      name:"小王",
      age:"16",
      like:"money"
    })

    function upAge(){
      person.age = 120
    }
    return {
      person,
      upAge
    }
  }
 }
</script>





