import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap'
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: HelloWorld }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

createApp(App).use(router).mount('#app')

createApp(App).mount('#app')
