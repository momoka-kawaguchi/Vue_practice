import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Button001 from "@/views/Button001.vue";
import Button002 from "@/views/Button002.vue";
import Button003 from "@/views/Button003.vue";
import Button003Fix from "@/views/Button003Fix.vue";
import Button004 from "@/views/Button004.vue";
import Button005 from "@/views/Button005.vue";
import Input006 from "@/views/Input006.vue";
import Table007 from "@/views/Table007.vue";
import Table008 from "@/views/Table008.vue";
import Table009 from "@/views/Table009.vue";
import Form010 from "@/views/Form010.vue";
import Form011 from "@/views/Form011.vue";
import Form012 from "@/views/Form012.vue";
import Form013 from "@/views/Form013.vue";
import Form014 from "@/views/Form014.vue";
import Component015 from "@/views/Component015.vue";
import Api016 from "@/views/Api016.vue";
import Api017 from "@/views/Api017.vue";
import Api018 from "@/views/Api018.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/001",
    name: "button001",
    component: Button001,
  },
  {
    path: "/002",
    name: "button002",
    component: Button002,
  },
  {
    path: "/003",
    name: "button003",
    component: Button003,
  },
  {
    path: "/003fix",
    name: "button003fix",
    component: Button003Fix,
  },
  {
    path: "/004",
    name: "button004",
    component: Button004,
  },
  {
    path: "/005",
    name: "button005",
    component: Button005,
  },
  {
    path: "/006",
    name: "input006",
    component: Input006,
  },
  {
    path: "/007",
    name: "table007",
    component: Table007,
  },
  {
    path: "/008",
    name: "table008",
    component: Table008,
  },
  {
    path: "/009",
    name: "table009",
    component: Table009,
  },
  {
    path: "/010",
    name: "form010",
    component: Form010,
  },
  {
    path: "/011",
    name: "form011",
    component: Form011,
  },
  {
    path: "/012",
    name: "form012",
    component: Form012,
  },
  {
    path: "/013",
    name: "form013",
    component: Form013,
  },
  {
    path: "/014",
    name: "form014",
    component: Form014,
  },
  {
    path: "/015",
    name: "component015",
    component: Component015,
  },
  {
    path: "/016",
    name: "Api016",
    component: Api016,
  },
  {
    path: "/017",
    name: "Api017",
    component: Api017,
  },
  {
    path: "/018",
    name: "Api018",
    component: Api018,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
