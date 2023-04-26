<template>
<h2>
  當前坐標位置 x:{{posint.x}},y{{posint.y}}
</h2>
</template>

<script>
import testPoint from './hooks/Position'
export default {
  //组件名称
  name:'Movent',
  //接收外部参数
  setup(){
    
      let posint = testPoint()
      
    return {
      posint
    }
  }
}
</script>
