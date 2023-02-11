<template>
    <div>
        <p>我是组件A</p>
        <CZB>
          <!-- <span style="color:red">
          插槽是否生效
          </span> -->
          <!-- <CZC></CZC> -->
          <template v-slot:heder:obj>
            <p>{{data.obj.firstName}}</p>
          </template>
          <template v-slot:obj>
            <p>我是默认的 {{data.obj.contentName}}</p>
          </template>
          <template v-slot:footer:obj>
            <p>我是底部{{data.obj.lastName}}</p>
          </template>
          </CZB>
    </div>
</template>

<script>
import CZB from './CZB.vue'
// import CZC from './CZC.vue'
export default {
  name:'CZA',
  components:{
    CZB,
    // CZC
  },
  data(){
    return {
 
    }
  }
}
</script>







