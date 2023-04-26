import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
// import AppCopy from './AppCopy.vue'
import ARouter from './ARouter.vue'


import { Modal, message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import 'ant-design-vue/es/modal/style/css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './routers/index3'




// const  app =  createApp(App);
// const app = createApp(AppCopy)
const app = createApp(ARouter)
app.use(router).use(Antd).mount('#app')

app.config.globalProperties.$Modal = Modal;
app.config.globalProperties.$message = message;
