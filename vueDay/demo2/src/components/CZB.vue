<template>
    <div>
        <!-- 插槽的使用方式   用于容纳外部组件的预留--> 
        <!-- <slot><p>我是组件B</p></slot>   -->
        <!-- 具名插槽 -->
        <header>
          <!-- obj作为<slot>元素的一个attribute绑定上去</slot> 作用域 绑定的slot 被称为插槽-->
          <slot name="heder" :obj="obj">{{obj.firstName}}</slot> 
        </header>

        <main :obj="obj">
          <slot >{{obj.contentName}} </slot>
        </main>

        <footer>
          <slot name="footer" :obj="obj">{{obj.lastName}}</slot> 
        </footer>
    </div>
</template>

<script>
export default {
  name:'CZB',
  data(){
    return {
        obj:{
          firstName:'我是组件B',
          contentName:'我是组件B内容',
          lastName:"我是组件尾巴"
        }
    }
  }
}
</script>

关于插槽建议使用后备内容 将组件放于<slot></slot>
