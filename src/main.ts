import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ScrollTop from "primevue/scrolltop";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Image from "primevue/image";
import Card from "primevue/card";
import Paginator from "primevue/paginator";
import Skeleton from "primevue/skeleton";

import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(createPinia())
  .use(ToastService)
  .component("ScrollTop", ScrollTop)
  .component("Toast", Toast)
  .component("Image", Image)
  .component("Card", Card)
  .component("Paginator", Paginator)
  .component("Skeleton", Skeleton)

  .mount("#app");
