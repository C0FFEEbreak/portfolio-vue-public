// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'                  // global CSS import
import intersect from './directives/intersect.js'

// create the app once
const app = createApp(App)

// register global directive
app.directive('intersect', intersect)

app.mount('#app')
