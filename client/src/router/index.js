import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import paths from "./paths";

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: paths
});

export default router;
