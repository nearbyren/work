<template>
  <h1>About</h1>
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
export default {
  name: 'About',
setup(){
  
  onBeforeMount(()=>{
    console.log('About onBeforeMount',this)
  })
  onMounted(()=>{
    console.log('About onMounted',this)

  })
  onUnmounted(()=>{
    console.log('About onUnmounted')

  })
}
}
</script>





