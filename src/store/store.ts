import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
interface User {
  name: string;
  email: string;
  role: string;
  id: string;
  phone: string;
}

interface State {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

export const useStore = create<State>(
  persist(
    (set) => ({
      user: {
        name: "",
        email: "",
        role: "",
        id: "",
        phone: "",
      },
      login: (user: User) => set({ user }),
      logout: () =>
        set({
          user: {
            name: "",
            email: "",
            role: "",
            id: "",
            phone: "",
          },
        }),
    }),
    {
      name: "user-storage",
    }
  )
);
