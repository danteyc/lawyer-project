import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import filterReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filterReducer
  },
  devTools: import.meta.env.NODE_ENV !== 'production'
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch