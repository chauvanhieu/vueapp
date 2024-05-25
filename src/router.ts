import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Home from './views/home.vue'
import CategoryDetail from './views/category-detail.vue'

const routes: RouteRecordRaw[] = [
    { path: '/ma-giam-gia/:slug', component: CategoryDetail },
    { path: '/', component: Home },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router