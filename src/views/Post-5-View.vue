<script setup>
// Code Examples
import example1 from '../assets/code/post-5/example-1';
import example2 from '../assets/code/post-5/example-2';
import example3 from '../assets/code/post-5/example-3';
import example4 from '../assets/code/post-5/example-4';

// SEO
import { useHead } from '@unhead/vue';

useHead({
    title: 'Fix PHP File Sessions causing storage full errors on Linux because of maxed inodes - Bubalubs Blog',
    meta: [
        {
            name: 'description',
            content:
                'How to Fix PHP File Sessions causing storage full errors on Linux because of maxed inodes',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://bubalubs.io/fix-php-file-sessions-causing',
        },
    ],
});
</script>

<template>
    <main>
        <h1 class="text-center lg:px-64">
            Fix PHP File Sessions causing storage full errors on Linux because of maxed inodes
        </h1>

        <p class="mb-12 text-center text-pink-400 text-sm">March 14, 2021</p>

        <p>
            I was getting lot's of storage full errors on a web server which was causing Redis and
            other things to crash and not be able to start, but when I checked the disk space it
            appeared to have lot's of space available. However after researching I discovered using
            the command:
        </p>

        <highlightjs language="bash" :code="example1" />

        <p>
            I was able to see that the server was actually 100% maxed with inodes, which are created
            and store information about every file and directory.
        </p>

        <p>
            To then find out which directory was creating too many files, I used this command in the
            server's root directory:
        </p>

        <highlightjs language="bash" :code="example2" />

        <p>
            Which shows how many files are in each directory with the highest at the bottom. However
            if there are too many files or have access problems and that command dosn't work then
            you might also be able to use this:
        </p>

        <highlightjs language="bash" :code="example3" />

        <p>
            To view the amount in the directory you are in, then you can cd down each directory
            until you find the directory that is taking up too many innodes.
        </p>

        <p>In my case it was PHP file sesssions within /var/lib/php/sessions and I used:</p>

        <highlightjs language="bash" :code="example4" />

        <p>
            To be able to delete all the session files and start fresh and then everything was
            working good again!
        </p>
    </main>
</template>
