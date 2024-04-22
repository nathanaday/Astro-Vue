import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css';           // core css

// Create a Vue application instance
const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue);

// Mount the application
app.mount('#app');
