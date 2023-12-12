import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/stripe-3dsecure-2-checkout-using-setup-intent',
            name: 'post-1',
            component: () => import('../views/Post-1.vue'),
        },
        {
            path: '/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server',
            name: 'post-2',
            component: () => import('../views/Post-2.vue'),
        },
        {
            path: '/updating-homestead',
            name: 'post-3',
            component: () => import('../views/Post-3.vue'),
        },
        {
            path: '/updating-tailwind-to-v2-0',
            name: 'post-4',
            component: () => import('../views/Post-4.vue'),
        },
        {
            path: '/fix-php-file-sessions-causing',
            name: 'post-5',
            component: () => import('../views/Post-5.vue'),
        },
        {
            path: '/error-when-installing-ghost-v4-locally',
            name: 'post-6',
            component: () => import('../views/Post-6.vue'),
        },
    ],
});

export default router;
