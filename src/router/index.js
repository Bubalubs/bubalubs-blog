import { createRouter, createWebHistory } from 'vue-router';

// Main views
import Home from '../views/Home-View.vue';
import Privacy from '../views/Privacy-View.vue';

// Post views
import Post1 from '../views/Post-1-View.vue';
import Post2 from '../views/Post-2-View.vue';
import Post3 from '../views/Post-3-View.vue';
import Post4 from '../views/Post-4-View.vue';
import Post5 from '../views/Post-5-View.vue';
import Post6 from '../views/Post-6-View.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Main
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy,
        },

        // Posts
        {
            path: '/stripe-3dsecure-2-checkout-using-setup-intent',
            name: 'post-1',
            component: Post1,
        },
        {
            path: '/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server',
            name: 'post-2',
            component: Post2,
        },
        {
            path: '/updating-homestead',
            name: 'post-3',
            component: Post3,
        },
        {
            path: '/updating-tailwind-to-v2-0',
            name: 'post-4',
            component: Post4,
        },
        {
            path: '/fix-php-file-sessions-causing',
            name: 'post-5',
            component: Post5,
        },
        {
            path: '/error-when-installing-ghost-v4-locally',
            name: 'post-6',
            component: Post6,
        },

        // Catch all 404
        {
            path: '/:catchAll(.*)',
            redirect: { name: 'home' },
        },
    ],
});

export default router;
