import { create } from "zustand";
import { Actions, UserState } from "./user.interfaces";
import { persist } from "zustand/middleware";
import { userInitialValue } from "./user.initialValue";

export const userStore = create<UserState & Actions>(
  persist((set) => ({
    user: userInitialValue,
    isAuthenticated: false,
    setUser: (user) => set(() => ({ user })),
    setAuthenticated: (isAuthenticated) =>
      set(() => ({ isAuthenticated: isAuthenticated })),
  }), {
    name: "user-store",
  })
);
