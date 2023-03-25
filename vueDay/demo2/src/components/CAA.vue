<template>
  <h1>个人信息</h1>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
<input type="text" v-model="person.name"/>
<br/>
<input type="text" v-model="person.age"/>
<br/>
<input type="text" v-model="watchValue"/>

<h2>watch: {{watchValue}}</h2>
<br/>
<h2>组合的信息：{{info}}</h2>
<br/>
<Movent></Movent>
</template>

<script>
import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue'
import Movent from './Movent.vue'
export default {
  //组件名称
  name:'CAA',
  components:{Movent},
  //接收外部参数
  setup(){
    console.log('setup')

    let watchValue = ref("watch")

    let person = reactive({
      name :'lr',
      age:'11'
    })

    //计算属性
    let info = computed(()=>{
      return person.name +' - '+person.age
    })

    //需要指定监控属性
    watch(watchValue,(newValue,oldValue)=>{
      console.log('watchValue 变化了',newValue,oldValue)
    })
    //监控里面需要监控变化的回调
    watchEffect(()=>{
        const x1 = person.name.value
        console.log('watchEffect 回調了')
    })

    onBeforeMount(()=>{
      console.log('setup onBeforeMount')
    })
    onMounted(()=>{
      console.log('setup onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('setup onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('setup onUpdated')
    })
    onBeforeUnmount(()=>{
      console.log('setup onBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('setup onUnmounted')
    })

   
    return {
      person,
      info,
      watchValue,
      Movent
    }
  },
  
  //#region 
  /* 
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')

  },
  beforeMount(){
    console.log('beforeMount')

  },
  mounted(){
    console.log('mounted')

  },
  beforeUpdate(){
    console.log('beforeUpdate')

  },
  updated(){
    console.log('updated')

  },
  beforeUnmount(){
    console.log('beforeUnmount')

  },
  unmounted(){
    console.log('unmounted')

  }*/
  //#endregion
}
</script>
