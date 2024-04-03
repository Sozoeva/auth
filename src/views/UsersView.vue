<script setup lang="ts">
import router from "@/router";
import { onMounted } from "vue";
import { useUsersStore } from "@/stores/useUsersStore";

const usersStore = useUsersStore();

if (!localStorage.getItem("token")) {
  router.push("/");
}

onMounted(() => {
  usersStore.getUsers();
});
</script>

<template>
  <div class="flex flex-col items-center gap-5 pt-10">
    <div v-for="user in usersStore.users">
      {{ user.userName }}
    </div>
  </div>
</template>
