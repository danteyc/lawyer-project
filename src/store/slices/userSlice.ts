import { createSlice } from "@reduxjs/toolkit";

export interface UserState{
  name: string;
  email: string;
  role: string;
  id: string;
  phone: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  role: '',
  id: '',
  phone: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.phone = action.payload.phone;
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.role = '';
      state.id = '';
      state.phone = '';
    }
  }

})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;