<script setup>
// Code Examples
import example1 from '../assets/code/post-1/example-1';
import example2 from '../assets/code/post-1/example-2';
import example3 from '../assets/code/post-1/example-3';
import example4 from '../assets/code/post-1/example-4';
import example5 from '../assets/code/post-1/example-5';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js - Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'A guide to using Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/stripe-3dsecure-2-checkout-using-setup-intent',
        },
    ],
});
</script>

<template>
    <main>
        <h1 class="text-center lg:px-64">
            Stripe 3DSecure Checkout using SetupIntent with Laravel and Vue.js
        </h1>

        <p class="mb-12 text-center text-pink-400 text-sm">April 23, 2020</p>

        <h2>SetupIntent vs PaymentIntent</h2>

        <p>
            Use payment intents if you want the customer to be instantly charged within the checkout
            process. You can use setup intents to do a 3DSecure check on the card and then save it
            for charging later (Or practically straight away) in your back end code. If using
            payment intents you have to use Stripe's webhooks to listen for the payment succeeding
            and then handle and fullfill the order.
        </p>

        <p>
            In these examples I will use the SetupIntent approach and charge the customer after the
            checkout process.
        </p>

        <h2>Create SetupIntent on your server</h2>

        <p>
            First create a SetupIntent on your server and send it to your front-end. This token can
            only be used once so is idempotent and stops any duplication happening.
        </p>

        <highlightjs language="php" :code="example1" />

        <h2>Checking customer's card in your front end</h2>

        <highlightjs language="php" :code="example2" />

        <h2>
            Create or retrieve customer and then attach payment method to customer on your server
        </h2>

        <highlightjs language="php" :code="example3" />

        <h2>Charging the customer</h2>

        <highlightjs language="php" :code="example4" />

        <h2>Starting a Subscription</h2>

        <highlightjs language="php" :code="example5" />
    </main>
</template>
