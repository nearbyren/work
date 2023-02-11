<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" @addTest="addTest"/>
  <TestView msg="您大爷的" :title="title"></TestView>
   <h1>{{ first }} {{ last }}</h1>
  <UserName
    v-model:first-name="first"
    v-model:last-name="last"
  />
  <CZA></CZA>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestView from './components/TestView.vue'
import UserName from './components/UserName.vue'
import CZA from './components/CZA.vue'

export default {
  name: 'App',
  data(){
    return {
      title : '初始化您大爷的',
      first: 'John',
      last: 'Doe'
    }
  },
  components: {
    HelloWorld,
    TestView,
    UserName,
    CZA
  },
  methods:{
    //接收外部传递过来的数据
    addTest(title){
        this.title = title
    }
  }
}






</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
