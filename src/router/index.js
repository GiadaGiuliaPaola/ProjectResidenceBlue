import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ApartmentDetailsView from "../views/ApartmentDetailsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/apartment/:id", component: ApartmentDetailsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
