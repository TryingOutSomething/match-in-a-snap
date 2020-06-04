import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";

import "vue-loaders/dist/vue-loaders.css";
import VueLoadersBallPulse from "vue-loaders/dist/loaders/ball-pulse";

Vue.use(VueLoadersBallPulse);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
