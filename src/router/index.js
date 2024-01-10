import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Login from "../components/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
  ],
});

export default router;
