import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './../pages/coaches/CoachDetail.vue'
import CoachRegistered from './../pages/coaches/CoachRegistered.vue'
import CoachesList from './../pages/coaches/CoachesList.vue'

import ContactCoach from './../pages/requests/ContactCoach.vue'
import RequestsRegistered from './../pages/requests/RequestsRegistered.vue'

import NotFound from './../pages/NotFound.vue'

const routes = [
    {
        path: '/',
        redirect: '/coaches',
    },
    {
        path: '/coaches',
        component: CoachesList,
    },
    {
        path: '/coaches/:id',
        component: CoachDetail,

        children: [
            {
                path: 'contact',
                component: ContactCoach,
            },
        ],
    },
    {
        path: '/register',
        component: CoachRegistered,
    },
    {
        path: '/requests',
        component: RequestsRegistered,
    },
    {
        path: '/:notFound(.*)',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
