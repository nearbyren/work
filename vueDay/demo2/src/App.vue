<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <HelloWorld msg="Welcome to Your Vue.js App" @addTest="addTest"/>
  <TestView msg="您大爷的" :title="title"></TestView>
   <h1>{{ first }} {{ last }}</h1>
  <!-- <a-button type="primary">主按钮</a-button>
  <a-button>默认按钮</a-button>
  <a-button type="dashed">虚线按钮</a-button> -->
  <UserName v-model:first-name="first"  v-model:last-name="last"/>
  <CZA></CZA>
  <RHELLO></RHELLO>
  <button v-on:click="showInfo(1,2,3,4)">点击showInfo</button>
  <input type="text" placeholder="三生三世" @keyup="infoke">
  <!-- <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
              theme="dark"
              mode="horizontal"
              v-model:selectedKeys="selectedKeys1"
              :style="{ lineHeight: '64px' }" >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
        <a-menu-item key="3">nav 4</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
                mode="inline"
                v-model:selectedKeys="selectedKeys2"
                v-model:openKeys="openKeys"
                :style="{ height: '100%', borderRight: 0 }" >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestView from './components/TestView.vue'
import UserName from './components/UserName.vue'
import CZA from './components/CZA.vue'
import RHELLO from './components/RHello.vue'
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
    CZA,
    RHELLO,
  },
  methods:{
    //接收HelloWorld外部传递过来的数据
    addTest(title){
        this.title = title
    },
    showInfo(a,b,c,d){
      console.log(a,b,c,d)
    },
    infoke(e){
      console.log(e.key)
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
