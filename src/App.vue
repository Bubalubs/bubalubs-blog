<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const showScrollToTop = ref(false);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const checkScroll = () => {
    showScrollToTop.value = window.scrollY > 100;
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});
</script>

<template>
    <div
        class="h-full w-full text-slate-900 dark:text-slate-200 bg-gradient-to-l from-[#dce4eb] via-[#d1d9e6] to-[#b3c1d1] dark:bg-gradient-to-tr dark:from-[#0a0a30] dark:via-[#050517] dark:to-[#0a0a20]"
    >
        <div class="container mx-auto text-center" id="app">
            <div class="flex flex-col justify-between h-full min-h-screen">
                <header>
                    <RouterLink to="/" title="Home">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            aria-label="Home icon"
                            class="fill-pink-700 dark:fill-white w-12 h-12 mx-auto"
                        >
                            <path
                                d="M256.001 477.407c-2.59 0-5.179-.669-7.499-2.009-2.52-1.454-62.391-36.216-123.121-88.594-35.994-31.043-64.726-61.833-85.396-91.513C13.237 256.885-.214 219.943.003 185.49c.254-40.09 14.613-77.792 40.435-106.162 26.258-28.848 61.3-44.734 98.673-44.734 47.897 0 91.688 26.83 116.891 69.332 25.203-42.501 68.994-69.332 116.891-69.332 35.308 0 68.995 14.334 94.859 40.362 28.384 28.563 44.511 68.921 44.247 110.724-.218 34.393-13.921 71.279-40.728 109.632-20.734 29.665-49.426 60.441-85.279 91.475-60.508 52.373-119.949 87.134-122.45 88.588a15.008 15.008 0 0 1-7.541 2.032z"
                            />
                        </svg>
                    </RouterLink>
                </header>

                <RouterView />

                <footer class="mt-8">
                    <hr
                        class="border-0 h-1 max-w-4xl mx-4 md:mx-auto rounded-full opacity-90 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-[length:200%_200%] animate-gradient soft-glow dark:dark-glow"
                    />

                    <div class="py-4 flex gap-6 md:gap-12 justify-center text-sm">
                        <p class="text-slate-500 dark:text-slate-600 pb-0">v2.6.6</p>

                        <div class="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="512"
                                height="512"
                                viewBox="0 0 512.001 512.001"
                                class="h-4 w-4 inline-block fill-slate-400 dark:fill-slate-600 hover:fill-pink-500"
                            >
                                <path
                                    class="transition-all duration-300"
                                    d="M256.001 477.407c-2.59 0-5.179-.669-7.499-2.009-2.52-1.454-62.391-36.216-123.121-88.594-35.994-31.043-64.726-61.833-85.396-91.513C13.237 256.885-.214 219.943.003 185.49c.254-40.09 14.613-77.792 40.435-106.162 26.258-28.848 61.3-44.734 98.673-44.734 47.897 0 91.688 26.83 116.891 69.332 25.203-42.501 68.994-69.332 116.891-69.332 35.308 0 68.995 14.334 94.859 40.362 28.384 28.563 44.511 68.921 44.247 110.724-.218 34.393-13.921 71.279-40.728 109.632-20.734 29.665-49.426 60.441-85.279 91.475-60.508 52.373-119.949 87.134-122.45 88.588a15.008 15.008 0 0 1-7.541 2.032z"
                                />
                            </svg>

                            <p class="text-slate-500 dark:text-slate-600">Bubalubs &copy; 2024</p>
                        </div>
                        <a
                            href="https://audit.bubalubs.io"
                            class="text-slate-800 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                            >Auditor</a
                        >
                    </div>
                </footer>

                <button
                    @click="scrollToTop"
                    v-if="showScrollToTop"
                    v-tooltip="'Scroll to top'"
                    class="fixed bottom-4 right-4 p-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-pink-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 dark:active:bg-slate-900 focus:outline-none border-4 border-transparent focus:border-pink-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        class="h-8 w-8 fill-current"
                    >
                        <path
                            d="M209 39a24 24 0 0 0-34 0L7 215c-10 10-9 25 0 34s25 9 34 0l127-133v340a24 24 0 1 0 48 0V116l127 133a24 24 0 0 0 34-33L209 40z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
