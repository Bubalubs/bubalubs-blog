<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="container mx-auto">
        <header class="pt-16 pb-0 text-center">
            <RouterLink to="/" class="text-2xl" title="Home">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512.001 512.001"
                    class="h-12 w-12 inline-block fill-white hover:fill-pink-500"
                >
                    <path
                        class=" transition-all duration-300"
                        d="M256.001 477.407c-2.59 0-5.179-.669-7.499-2.009-2.52-1.454-62.391-36.216-123.121-88.594-35.994-31.043-64.726-61.833-85.396-91.513C13.237 256.885-.214 219.943.003 185.49c.254-40.09 14.613-77.792 40.435-106.162 26.258-28.848 61.3-44.734 98.673-44.734 47.897 0 91.688 26.83 116.891 69.332 25.203-42.501 68.994-69.332 116.891-69.332 35.308 0 68.995 14.334 94.859 40.362 28.384 28.563 44.511 68.921 44.247 110.724-.218 34.393-13.921 71.279-40.728 109.632-20.734 29.665-49.426 60.441-85.279 91.475-60.508 52.373-119.949 87.134-122.45 88.588a15.008 15.008 0 0 1-7.541 2.032z"
                    />
                </svg>
            </RouterLink>
        </header>

        <RouterView class="p-12" />

        <footer class="p-12 pt-0 text-gray-400 text-center">
            Bubalubs &copy; {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>
