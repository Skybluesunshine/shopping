import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'// 安装抹平不同浏览器间的样式差异
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
