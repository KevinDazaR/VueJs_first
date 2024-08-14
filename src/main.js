import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar estilos CSS
import './assets/styles/style.css';

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Importar Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App)
  .use(router)
  .mount('#app')
