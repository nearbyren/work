import { createApp } from 'vue'
import Antd from 'ant-design-vue'
// import App from './App.vue'
import AppCopy from './AppCopy.vue'
import 'ant-design-vue/dist/antd.css'

//引用ant方式
// const app = createApp(App)
const app = createApp(AppCopy)
console.log(app)
app.use(Antd).mount('#app')