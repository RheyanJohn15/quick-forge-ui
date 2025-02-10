import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import { definePreset } from '@primevue/themes';
import ToastService from 'primevue/toastservice';

import 'primeicons/primeicons.css';
import './assets/main.css';
// import '@/assets/styles.scss';

const app = createApp(App);


app.use(router);
app.use(ToastService);

const MyPreset = definePreset(Material, {
  semantic: {
      colorScheme: {
          light: {
              surface: {
                  0: '#ffffff',
                  50: '{green.50}',
                  100: '{green.100}',
                  200: '{green.200}',
                  300: '{green.300}',
                  400: '{green.400}',
                  500: '{green.500}',
                  600: '{green.600}',
                  700: '{green.700}',
                  800: '{green.800}',
                  900: '{green.900}',
                  950: '{green.950}'
              }
          },
          dark: {
              surface: {
                  0: '#ffffff',
                  50: '{emerald.50}',
                  100: '{emerald.100}',
                  200: '{emerald.200}',
                  300: '{emerald.300}',
                  400: '{emerald.400}',
                  500: '{emerald.500}',
                  600: '{emerald.600}',
                  700: '{emerald.700}',
                  800: '{emerald.800}',
                  900: '{emerald.900}',
                  950: '{emerald.950}'
              }
          }
      }
  }
});

app.use(PrimeVue, {
  theme: {
      preset: MyPreset
  }
});

app.mount('#app');
