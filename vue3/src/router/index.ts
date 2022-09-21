import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/001",
    name: "button001",
    component: () => import("../views/Button001.vue"),
  },
  {
    path: "/002",
    name: "button002",
    component: () => import("../views/Button002.vue"),
  },
  {
    path: "/003",
    name: "button003",
    component: () => import("../views/Button003.vue"),
  },
  {
    path: "/004",
    name: "input004",
    component: () => import("../views/Input004.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
