import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import './assets/main.css'

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)

const app = createApp(App)

app.use(router)

app.mount('#app')
