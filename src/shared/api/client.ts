import { authUserApi, getAuthUserDataApi } from "../config/api";
import axios from "axios";

export const authUser = async (login: string, password: string) => {
  try {
    await axios.post(authUserApi, {
      login: login,
      password: password
    }, { withCredentials: true })
  } catch (error) {
    console.log('Ошибка при авторизации:', error);
  }
};

export const getUserData = async () => {
  try {
    const { data } = await axios.get(getAuthUserDataApi, {
      withCredentials: true
    });
    return data;
  } catch (error) {
    console.log('Ошибка при получении данных:', error);
  }
};