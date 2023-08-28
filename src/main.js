import './assets/main.css';

import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import App from './App.vue';
import router from './router';

import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('bash', bash);

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(hljsVuePlugin);
app.use(head);

app.mount('#app');
