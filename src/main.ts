import { createApp } from "vue";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";

import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component("ScrollPanel", ScrollPanel)
  .component("ScrollTop", ScrollTop)
  .mount("#app");
