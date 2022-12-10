import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { Motion, Presence } from "motion/vue"

createApp(App)
    .component('Motion', Motion)
    .component('Presence', Presence)
    .mount('#app')