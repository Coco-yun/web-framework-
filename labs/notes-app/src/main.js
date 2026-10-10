import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

const app = createApp(App)
// 使用路由（关键这一行）
app.use(router)

app.mount('#app')
