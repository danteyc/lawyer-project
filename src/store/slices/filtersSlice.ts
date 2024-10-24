import { createSlice } from "@reduxjs/toolkit";

export interface FilterState{
  location: string;
  speciality: string;
}

const initialState: FilterState = {
  location: '1',
  speciality: '1'
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.location = action.payload.location;
      state.speciality = action.payload.speciality;
    },
    clearFilters: (state) => {
      state.location = '';
      state.speciality = '';
    }
  }

})

export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;