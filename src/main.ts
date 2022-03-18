import { createApp } from 'vue'  
import App from './App.vue'  
import './index.css'  
import { createPinia } from "pinia";  
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import Components for routes..


const router = createRouter({
	history:createWebHistory(),
	routes : [
	{path: '/', name: 'Home', component : HelloWorld },
	// add more paths here
	]
})


createApp(App)
.use(router)
.use(createPinia())
.mount('#app');