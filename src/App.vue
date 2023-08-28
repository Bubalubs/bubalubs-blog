<script setup>
    import { RouterLink, RouterView } from 'vue-router'

    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/github.css';
    import javascript from 'highlight.js/lib/languages/javascript';

    hljs.registerLanguage('javascript', javascript);
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/stripe-3dsecure-2-checkout-using-setup-intent">Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>