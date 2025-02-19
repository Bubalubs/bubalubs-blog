<script setup>
// Code Examples
import example1 from '../assets/code/post-2/example-1';
import example2 from '../assets/code/post-2/example-2';
import example3 from '../assets/code/post-2/example-3';
import example4 from '../assets/code/post-2/example-4';
import example5 from '../assets/code/post-2/example-5';
import example6 from '../assets/code/post-2/example-6';
import example7 from '../assets/code/post-2/example-7';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Fix LetsEncrypt to work without Laravel Forge on previously provisioned server - Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'How to Fix LetsEncrypt to work without Laravel Forge on previously provisioned server',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/fixing-letsencrypt-to-work-without-laravel-forge-on-previously-provisioned-server',
        },
    ],
});
</script>

<template>
    <main class="mx-4 lg:w-1/2 lg:mx-auto text-left">
        <h1 class="text-center">
            Fix LetsEncrypt to work without Laravel Forge on previously provisioned server
        </h1>

        <p class="mb-12 text-center text-pink-400 text-sm">April 27, 2020</p>

        <p>
            If you provisioned a server using Laravel forge and are no longer relying on that for
            TLS certificate renewals, if the renewal process stops working you can do the following
            steps to fix it using the LetsEncrypt CLI tool and adjusting your site nginx config.
        </p>

        <p>
            First SSH into your server and run the following command which will create a new
            certificate for your site without it trying to edit the nginx config automatically.
        </p>

        <highlightjs language="bash" :code="example1" />

        <p>If you don't have Certbot already installed you can get it by running</p>

        <highlightjs language="bash" :code="example2" />

        <p>
            When running the command you will see a list of your sites that certificates can be
            created for. Select your site by typing in it's number.
        </p>

        <p>Then edit your site's nginx config file:</p>

        <highlightjs language="bash" :code="example3" />

        <p>
            Then remove all the existing Forge SSL settings and add the following instead (replacing
            YOURDOMAIN with your own domain):
        </p>

        <highlightjs language="bash" :code="example4" />

        <p>Then save that file (:wq) and restart nginx:</p>

        <highlightjs language="bash" :code="example5" />

        <p>You can test the config is working by running the following:</p>

        <highlightjs language="bash" :code="example6" />

        <p>
            Then your certificate should be working correctly and should get autorenewed by the
            cerbot.
        </p>

        <p>You can also test to make sure your certificates renew correctly by doing:</p>

        <highlightjs language="bash" :code="example7" />
    </main>
</template>
