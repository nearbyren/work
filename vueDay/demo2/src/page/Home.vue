<template>
    <h1>Home</h1>
    <ul>
      <li>
        <router-link active-class="active" to="/home/children1">Children1</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/home/children2">Children2</router-link>
      </li>
    </ul>
  
    <router-view></router-view>

</template>

<script>
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
export default {
    name: 'Home',
setup(){
    onBeforeMount(()=>{
      console.log('Home onBeforeMount',this)
    })
    onMounted(()=>{
      console.log('Home onMounted')

    })
    onUnmounted(()=>{
      console.log('Home onUnmounted')

    })
 }
}
</script>





