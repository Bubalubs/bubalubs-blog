<script setup>
// Code Examples
import example1 from '../assets/code/post-6/example-1';
import example2 from '../assets/code/post-6/example-2';
import example3 from '../assets/code/post-6/example-3';
import example4 from '../assets/code/post-6/example-4';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Fixing "Cannot find module \'sqlite3\'" error when installing Ghost v4 locally',
    meta: [
        {
            name: 'description',
            content:
                'How to Fix "Cannot find module \'sqlite3\'" error when installing Ghost v4 locally',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/error-when-installing-ghost-v4-locally',
        },
    ],
});
</script>

<template>
    <main>
        <h1 class="text-center lg:px-64">
            Fixing "Cannot find module 'sqlite3'" error when installing Ghost v4 locally
        </h1>

        <p class="mb-12 text-center text-gray-400">March 27, 2021</p>

        <p>I was getting the following error when installing Ghost v4 locally on Windows 10:</p>

        <highlightjs language="bash" :code="example1" />

        <p>
            For some reason it is having problems installing sqlite3, however you can get past this
            by running the command yourself:
        </p>

        <highlightjs language="bash" :code="example2" />

        <p>Then you should be able to run:</p>

        <highlightjs language="bash" :code="example3" />

        <p>To have your local version up and running!</p>

        <p>
            If that still doesn't work, try reinstalling the ghost-cli and make sure your node
            version i up to date and try again.
        </p>

        <highlightjs language="bash" :code="example4" />
    </main>
</template>
