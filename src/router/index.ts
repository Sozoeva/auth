import UsersView from "@/views/UsersView.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";
import ProfileView from "@/views/ProfileView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/register",
      name: "auth",
      component: RegisterView,
    },
    {
      path: "/users",
      name: "users",
      component: UsersView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/user/:id",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
