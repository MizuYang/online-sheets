import { createApp } from 'vue'
import router from './router'

import { createPinia } from 'pinia'

import 'bootstrap'

import App from './App.vue'

import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet'

const pinia = createPinia()
const app = createApp(App)

app.use(SpreadsheetPlugin)
app.use(router)
app.use(pinia)

app.mount('#app')
