import { createApp } from 'vue'  
import App from './App.vue'  
import './index.css'  
import { createPinia } from "pinia";  
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import HelloCounter from './pages/HelloCounter.vue'

// import Components for routes..


const router = createRouter({
	history:createWebHistory(),
	routes : [
	{path: '/', name: 'Home', component : Home },
	{path: '/hello_counter', name: 'HelloCounter', component : HelloCounter, description : "Counter in Options Api and Compositon API" },
	]
})


createApp(App)
.use(router)
.use(createPinia())
.mount('#app');