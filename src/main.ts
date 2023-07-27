import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入pinia仓库
import pinia from '@/store'

import HospitalTop from "@/components/top_hospital/index.vue"
import HospitalBottom from "@/components/bottom_hospital/index.vue"
import Login from "@/components/login/index.vue"
import Visitor from "@/components/visitor/index.vue"


const app = createApp(App)

app.component("HospitalTop", HospitalTop)
app.component("HospitalBottom", HospitalBottom)
app.component("Login", Login)
app.component('Visitor',Visitor);

app.use(router)
app.use(pinia)

app.use(ElementPlus, {
    locale: zhCn,
})
//引入路由鉴权的文件
import './permisstion'

app.mount('#app')
