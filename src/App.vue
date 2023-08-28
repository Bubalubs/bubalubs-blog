<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="container mx-auto">
        <header class="p-12 pb-0">
            <RouterLink to="/" class="mb-12 text-2xl">Bubalubs</RouterLink>
        </header>

        <RouterView class="p-12" />
    </div>
</template>