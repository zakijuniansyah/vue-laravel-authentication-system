import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {path: "/", component: Login},
  {path: "/register", component: Register},
  {path: "/dashboard", component: Dashboard, meta: {requiresAuth: true}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  // kalau sudah login, jangan ke login/register
  if((to.path === "/" || to.path === "/register") && token){
    next("/dashboard");
  } else if(to.meta.requiresAuth && !token){
    next("/");
  } else {
    next();
  }
})

export default router;