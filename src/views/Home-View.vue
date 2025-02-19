<script setup>
// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'A blog focusing on performance, security, and accessibility in web development and server management.',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io',
        },
    ],
});
</script>

<template>
    <main class="mx-4 lg:w-1/2 lg:mx-auto text-left">
        <h2 class="text-center">Projects</h2>

        <div class="flex flex-wrap justify-center text-center">
            <a
                href="https://audit.bubalubs.io"
                title="Web Auditor"
                class="bg-pink-700 hover:bg-pink-600 hover:text-white p-4 m-4 rounded-lg w-64 text-white"
            >
                <h3>Web Auditor</h3>
                <p class="mb-0 text-xs font-normal">
                    Advanced auditing tool focused on SEO, security, performance, and accessibility.
                </p>
            </a>
        </div>

        <h2 class="text-center mt-12">Blog</h2>

        <nav class="flex flex-col p-6 text-left bg-slate-900 rounded-lg mt-6 gap-4">
            <RouterLink
                class="border-b border-slate-600 border-dashed"
                to="/error-when-installing-ghost-v4-locally"
                >Fixing "Cannot find module 'sqlite3'" error when installing Ghost v4
                locally</RouterLink
            >
            <RouterLink class="border-b border-slate-600 border-dashed" to="/fix-php-file-sessions-causing"
                >Fix PHP File Sessions causing storage full errors on Linux because of maxed
                inodes</RouterLink
            >
            <RouterLink class="border-b border-slate-600 border-dashed" to="/updating-tailwind-to-v2-0"
                >Fix 'TypeError: getProcessedPlugins is not a function' error after updating
                Tailwind to 2.0</RouterLink
            >
            <RouterLink class="border-b border-slate-600 border-dashed" to="/updating-homestead"
                >Fix MySQL Databases no longer being created after Laravel Homestead has been
                updated</RouterLink
            >
            <RouterLink
                class="border-b border-slate-600 border-dashed"
                to="/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server"
                >Fix LetsEncrypt to work without Laravel Forge on previously provisioned
                server</RouterLink
            >
            <RouterLink
                class="border-b border-slate-600 border-dashed"
                to="/stripe-3dsecure-2-checkout-using-setup-intent"
                >Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js</RouterLink
            >
        </nav>
    </main>
</template>
