import { create } from 'zustand';
import { authUser, getUserData } from '../../../shared/api/client';


interface UserStore {
  isAuth: boolean,
  balance: number,
  authorizeUser: (login: string, password: string) => Promise<void>,
  updateBalance: (value: number) => void
}

export const userStore = create<UserStore>((set, get) => ({
  isAuth: false,
  balance: 0,
  authorizeUser: async (login: string, password: string) => {
    try {
      await authUser(login, password)
      const data = await getUserData();
      set(
        {
          isAuth: true,
          balance: data.balance !== 0 ? data.balance : 100,
        })
    } catch (error) {
      console.log('Ошибка при авторизации:', error);
    }
  },
  updateBalance: (value: number) => {
    const { balance } = get();
    set({ balance: balance + value });
  }
}))
