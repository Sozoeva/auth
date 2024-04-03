<script setup lang="ts">
import router from "@/router";
import { useUsersStore } from "@/stores/useUsersStore";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const usersStore = useUsersStore();

const token = ref(localStorage.getItem("token"));

const logOut = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>

<template>
  <nav class="flex justify-between px-24 py-10 bg-gray-600 text-white">
    <RouterLink to="/"> На главную </RouterLink>
    <RouterLink to="/register">Список</RouterLink>
    <button @click="token ? logOut() : null">
      {{ token ? "Выйти" : "Регистрация/Логин" }}
    </button>
  </nav>
</template>
