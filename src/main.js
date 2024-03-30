import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-flux/style.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
