<script setup lang="ts">
import router from "@/router";
import { onMounted, ref, watch } from "vue";
import { useUsersStore } from "@/stores/useUsersStore";

const emailValue = ref<string>("");
const passwordValur = ref<string>("");

const usersStore = useUsersStore();

const loginUser = () => {
  usersStore.loginUser({
    email: emailValue.value,
    password: passwordValur.value,
  });
  router.push(`/users`);
};

const authPage = () => {
  router.push("/");
};

onMounted(() => {
  usersStore.getUsers();

  if (localStorage.getItem("token")) {
    router.push(`/users`);
  }
});
</script>

<template>
  <form
    @submit.prevent="
      {
        loginUser();
      }
    "
    class="h-screen w-full flex flex-col justify-center items-center gap-6"
  >
    <label class="text-2xl">Логин</label>
    <div class="flex flex-col gap-5 w-80">
      <input
        type="text"
        class="border py-1 pl-1 rounded-lg"
        placeholder="Введите email"
        v-model="emailValue"
      />
      <input
        type="password"
        class="border py-1 pl-1 rounded-lg"
        placeholder="Введите пароль"
        v-model="passwordValur"
      />
    </div>
    <div class="flex justify-around gap-10">
      <button
        @click="authPage"
        class="border bg-blueColor text-white py-1 px-3 rounded-lg"
      >
        Зарегистрироваться
      </button>
      <button
        type="submit"
        class="border bg-blueColor text-white py-1 px-3 rounded-lg"
      >
        Войти
      </button>
    </div>
  </form>
</template>
