import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { IResponse, IUsers } from "@/types/useraApi.types";

export const useUsersStore = defineStore("users", () => {
  const users = ref<IResponse[]>([]);

  const registerUser = async (newUser: IUsers) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_MAIN_URL}/register`,
        newUser
      );
      localStorage.setItem("token", data.accessToken);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  const loginUser = async (newUser: IUsers) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_MAIN_URL}/login`,
        newUser
      );
      localStorage.setItem("token", data.accessToken);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_MAIN_URL}/users`
      );
      users.value = data;
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  return {
    users,
    getUsers,
    registerUser,
    loginUser,
  };
});
