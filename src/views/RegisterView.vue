<script setup lang="ts">
import router from "@/router";
import { useUsersStore } from "@/stores/useUsersStore";
import { onMounted, ref, watch } from "vue";

const emailValue = ref<string>("");
const usernameValue = ref<string>("");
const passwordValue = ref<string>("");

const usersStore = useUsersStore();

const addUserFunc = () => {
  usersStore.registerUser({
    email: emailValue.value,
    password: passwordValue.value,
    userName: usernameValue.value,
  });
};

if (localStorage.getItem("token")) {
  router.push("/users");
}

const loginPage = () => {
  router.push("/login");
};

// onMounted(() => {
//   addUserFunc()
// });
</script>

<template>
  <form
    @submit.prevent="
      {
        addUserFunc();
      }
    "
    class="h-screen w-full flex flex-col justify-center items-center gap-6"
  >
    <label class="text-2xl">Регистрация</label>
    <div class="flex flex-col gap-5 w-80">
      <input
        type="text"
        class="border py-1 pl-1 rounded-lg"
        placeholder="Введите email"
        v-model="emailValue"
      />
      <input
        type="text"
        class="border py-1 pl-1 rounded-lg"
        placeholder="Введите username"
        v-model="usernameValue"
      />
      <input
        type="password"
        class="border py-1 pl-1 rounded-lg"
        placeholder="Введите пароль"
        v-model="passwordValue"
      />
    </div>
    <div class="flex justify-around gap-10">
      <button
        @click="loginPage"
        class="border bg-blueColor text-white py-1 px-3 rounded-lg"
      >
        Логин
      </button>
      <button class="border bg-blueColor text-white py-1 px-3 rounded-lg">
        Зарегистрироваться
      </button>
    </div>
  </form>
</template>

<style scoped></style>
