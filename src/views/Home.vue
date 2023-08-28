<script setup>
    // SEO
    import { useHead } from '@unhead/vue';

    useHead({
        title: 'Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js',
        meta: [
            {
                name: 'description',
                content: 'A guide to using Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js',
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://bubalubs.io/stripe-3dsecure-2-checkout-using-setup-intent',
            }
        ]
    })
</script>

<template>
    <nav class="flex flex-col p-12">
        <RouterLink class="mb-6" to="/error-when-installing-ghost-v4-locally">Fixing "Cannot find module 'sqlite3'" error when installing Ghost v4 locally</RouterLink>
        <RouterLink class="mb-6" to="/fix-php-file-sessions-causing">Fix PHP File Sessions causing storage full errors on Linux because of maxed inodes</RouterLink>
        <RouterLink class="mb-6" to="/updating-tailwind-to-v2-0">Fix 'TypeError: getProcessedPlugins is not a function' error after updating Tailwind to 2.0</RouterLink>
        <RouterLink class="mb-6" to="/updating-homestead">Fix MySQL Databases no longer being created after Laravel Homestead has been updated</RouterLink>
        <RouterLink class="mb-6" to="/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server">Fix LetsEncrypt to work without Laravel Forge on previously provisioned server</RouterLink>
        <RouterLink class="mb-6" to="/stripe-3dsecure-2-checkout-using-setup-intent">Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js</RouterLink>
    </nav>
</template>
