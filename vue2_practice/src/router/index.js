import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Button001 from "@/views/Button001.vue";
import Button002 from "@/views/Button002.vue";
import Button003 from "@/views/Button003.vue";
import Input004 from "@/views/Input004.vue";
import Input005 from "@/views/Input005.vue";
import Input006 from "@/views/Input006.vue";
import Table007 from "@/views/Table007.vue";
import Table008 from "@/views/Table008.vue";
import Table009 from "@/views/Table009.vue";
import Form010 from "@/views/Form010.vue";
import Form011 from "@/views/Form011.vue";
import Form012 from "@/views/Form012.vue";
import Form013 from "@/views/Form013.vue";
import Form014 from "@/views/Form014.vue";
import Component015add from "@/views/Component015add.vue";

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
    path: "/004",
    name: "input004",
    component: Input004,
  },
  {
    path: "/005",
    name: "input005",
    component: Input005,
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
    name: "Form010",
    component: Form010,
  },
  {
    path: "/011",
    name: "Form011",
    component: Form011,
  },
  {
    path: "/012",
    name: "Form012",
    component: Form012,
  },
  {
    path: "/013",
    name: "Form013",
    component: Form013,
  },
  {
    path: "/014",
    name: "Form014",
    component: Form014,
  },
  {
    path: "/015add",
    name: "Component015add",
    component: Component015add,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
