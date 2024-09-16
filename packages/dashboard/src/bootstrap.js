import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_dashboard-dev-root');
  if (el) {
    // Para evitar problemas en ambientes de desarrollo, se crea un historial de navegacion
    mount(el);
  }
}

export { mount };
