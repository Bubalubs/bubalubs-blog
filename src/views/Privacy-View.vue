<script setup>
// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Privacy Policy - Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'Privacy Policy for Bubalubs Blog, a blog focusing on performance, security, and accessibility in web development and server management.',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/privacy',
        },
    ],
});
</script>

<template>
    <main>
        <h1 class="text-center lg:px-64">Privacy Policy</h1>

        <p class="mb-12 text-center text-pink-400 text-sm">
            Last updated: <strong>19th February 2025</strong>
        </p>

        <p>
            This privacy policy explains how
            <a href="https://bubalubs.io">bubalubs.io</a> and
            <a href="https://audit.bubalubs.io">audit.bubalubs.io</a>
            handle data, including what we collect, how we store it, and how we protect your
            privacy.
        </p>

        <h2>What Data We Collect</h2>
        <p>
            We do <strong>not</strong> collect personal data. This blog and auditing tool operate
            without storing or processing personal information.
        </p>

        <h2>Auditing Reports & Data Storage</h2>
        <p>
            Auditing reports are <strong>temporary</strong> and are cleaned up every
            <strong>hour</strong>. We do not store reports long-term.
        </p>
        <p>
            Cached results are kept for a maximum of <strong>15 minutes</strong> before being
            cleared.
        </p>

        <h2>Cookies & Tracking</h2>
        <p>
            We do <strong>not</strong> use cookies or third-party tracking. Your activity on this
            site is not monitored or stored.
        </p>

        <h2>Third-Party Services & Data Sharing</h2>
        <p>We do <strong>not</strong> share, sell, or distribute any data to third parties.</p>
        <p>
            Any external links may have their own privacy policies. We are not responsible for
            external sites.
        </p>

        <h2>Contact</h2>
        <p>
            If you have any questions, you can reach us at
            <a href="mailto:hello@bubalubs.io">hello@bubalubs.io</a>.
        </p>
    </main>
</template>
