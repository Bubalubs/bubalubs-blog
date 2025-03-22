<script setup>
// Code Examples
import example1 from '../assets/code/post-4/example-1';
import example2 from '../assets/code/post-4/example-2';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: "Fix 'TypeError: getProcessedPlugins is not a function' error after updating Tailwind to 2.0 - Bubalubs Blog",
    meta: [
        {
            name: 'description',
            content:
                "How to Fix 'TypeError: getProcessedPlugins is not a function' error after updating Tailwind to 2.0",
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/updating-tailwind-to-v2-0',
        },
    ],
});
</script>

<template>
    <main class="mx-4 lg:w-1/2 lg:mx-auto text-left">
        <h1 class="text-center">
            Fix 'TypeError: getProcessedPlugins is not a function' error after updating Tailwind to
            2.0
        </h1>

        <p class="mb-12 text-center text-pink-400 text-sm">November 25, 2020</p>

        <p>After updating Tailwind to version 2.0 I was getting the following error:</p>

        <highlightjs language="bash" :code="example1" />

        <p>
            It isn't too clear what do from looking up the error, but since I saw people mention
            these are new functions from Node v11+, I needed to update Node to the latest version
            (v14 for me). Then it worked again perfectly!
        </p>

        <p>Check your node version is higher than version 11 by running:</p>

        <highlightjs language="bash" :code="example2" />

        <p>
            Download the latest version of Node here:
            <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>
        </p>
    </main>
</template>
