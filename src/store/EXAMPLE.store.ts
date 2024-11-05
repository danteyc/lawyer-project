// import { type StateCreator, create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// interface PersonState {
//   firstName: string;
//   lastName: string;
// }

// interface Actions {
//   setFirstName: (name: string) => void;
//   setLastName: (name: string) => void;
// }

// const storeAPI: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) => ({
//   firstName: "John",
//   lastName: "Doe",
//   setFirstName: (name: string) => set(() => ({ firstName: name }), false, 'setFirstName'),
//   setLastName: (name: string) => set(() => ({ lastName: name }), false, 'setLastName'),
// });

// export const usePersonStore = create<PersonState & Actions>()(
//   devtools(
//     persist(storeAPI, {
//       name: "person-store",
//     })
//   )
// );
