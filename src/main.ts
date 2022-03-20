import { createApp } from 'vue'  
import App from './App.vue'  
import './index.css'  
import { createPinia } from "pinia";  
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import HelloCounterPage from './pages/HelloCounterPage.vue'
import CompositionApiPage from './pages/CompositionApiPage.vue'

// import Components for routes..


const router = createRouter({
	history:createWebHistory(),
	routes : [
	{path: '/', name: 'Home', component : HomePage },
	{path: '/hello_counter', name: 'HelloCounter', component : HelloCounterPage, description : "Counter in Options Api and Compositon API" },
	{path: '/composition_api', name: 'CompositionApi', component : CompositionApiPage, description : "Shows all features in a Compositon API component" },
	]
})


createApp(App)
.use(router)
.use(createPinia())
.mount('#app');