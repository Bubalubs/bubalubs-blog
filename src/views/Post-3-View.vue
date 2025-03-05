<script setup>
// Code Examples
import example1 from '../assets/code/post-3/example-1';
import example2 from '../assets/code/post-3/example-2';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Fix MySQL Databases no longer being created after Laravel Homestead has been updated - Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'How to Fix MySQL Databases no longer being created after Laravel Homestead has been updated',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/updating-homestead',
        },
    ],
});
</script>

<template>
    <main class="mx-4 lg:w-1/2 lg:mx-auto text-left">
        <h1 class="text-center">
            Fix MySQL Databases no longer being created after Laravel Homestead has been updated
        </h1>

        <p class="mb-12 text-center text-slate-800 dark:text-pink-400 text-sm">November 19, 2020</p>

        <p>
            If your MySQL databases are no longer being created when provisioning your updated
            Homestead VM. Then the following may help.
        </p>

        <p>
            If you kept your original Homestead.yaml file from an older version, you may need to add
            the following new features settings with the mysql value set as true.
        </p>

        <highlightjs language="bash" :code="example1" />

        <p>Then all you need to do is run in your Homestead directory:</p>

        <highlightjs language="bash" :code="example2" />

        <p>
            Remember when updating Homestead to read and follow the upgrade guide on the Laravel
            documentation (<a href="https://laravel.com/docs/master/homestead"
                >https://laravel.com/docs/8.x/homestead</a
            >) or you may miss important steps that are required when updating.
        </p>
    </main>
</template>
