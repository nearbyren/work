<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>我是vue3开始学习{{name}}</p>
<button @click="say()">spring</button>
<br/>

<!--演示生命周期操作-->
<button @click="showCAA = !showCAA">切换显示</button>

<!--模板使用引用组件-->
<CAA v-if="showCAA">
  <span>小程序开发</span>
</CAA>



</template>

<script>
import { ref } from 'vue'
//引用组件 名称随意取
import CAA from './components/CAA.vue'

// import { h } from 'vue'
// import { ref } from 'vue'
export default {
  name: 'App',
  components:{CAA},
  setup(){
    let showCAA = ref(true)
    return{showCAA}
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

#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
 
  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
 
  .site-layout-background {
    background: #fff;
  }
</style>
