import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap'
import MainPage from "@/components/MainPage.vue";
import Items from "@/components/Items.vue";
import Storages from "@/components/Storages.vue";
import StorageItems from "@/components/StorageItems.vue";
import InfoPage from "@/components/InfoPage.vue";
import createItems from "@/components/CreateItems.vue";
import createStorage from "@/components/CreateStorage.vue";
import edit_item from "@/components/edit_item.vue";
import editStorage from "@/components/editStorage.vue";


const routes = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: MainPage },
    { path: '/items', component: Items},
    { path: '/storages', component: Storages},
    { path: '/storages_item/:id/', component: StorageItems, props: true},
    { path: '/info', component: InfoPage},
    { path: '/create_items', component: createItems},
    { path: '/create_storage', component: createStorage},
    { path: '/edit_item/:id', component: edit_item, props: true},
    {path: '/edit_storage/:id', component: editStorage, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})



createApp(App).use(router).mount('#app')
