import { createApp } from 'vue'
import Antd from 'ant-design-vue'
// import App from './App.vue'
// import AppCopy from './AppCopy.vue'
import ARouter from './ARouter.vue'
import 'ant-design-vue/dist/antd.css'
import router from './routers/index3'

//引用ant方式
// const app = createApp(App)
// const app = createApp(AppCopy)
const app = createApp(ARouter)
console.log(app)
app.use(router).use(Antd).mount('#app')
