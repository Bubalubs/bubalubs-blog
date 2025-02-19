import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home-View.vue';

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
            component: () => import('../views/Post-1-View.vue'),
        },
        {
            path: '/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server',
            name: 'post-2',
            component: () => import('../views/Post-2-View.vue'),
        },
        {
            path: '/updating-homestead',
            name: 'post-3',
            component: () => import('../views/Post-3-View.vue'),
        },
        {
            path: '/updating-tailwind-to-v2-0',
            name: 'post-4',
            component: () => import('../views/Post-4-View.vue'),
        },
        {
            path: '/fix-php-file-sessions-causing',
            name: 'post-5',
            component: () => import('../views/Post-5-View.vue'),
        },
        {
            path: '/error-when-installing-ghost-v4-locally',
            name: 'post-6',
            component: () => import('../views/Post-6-View.vue'),
        },
    ],
});

export default router;
