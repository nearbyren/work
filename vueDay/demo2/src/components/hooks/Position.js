import { reactive,onMounted,onBeforeUnmount } from "vue"

//定義一個js
export default function (){
  let posint = reactive({
    x:0,
    y:0
  })

  function sagePosint(event){
    posint.x = event.pageX
    posint.y = event.pageY
    console.log('event ' +event.pageX,event.pageY)
}
 
  onMounted(()=>{
    console.log('onMounted ' )
    window.addEventListener('click',sagePosint)
  })
  onBeforeUnmount(()=>{
    console.log('onBeforeUnmount ' )
    window.removeEventListener('click',sagePosint)
  })
  return posint
}