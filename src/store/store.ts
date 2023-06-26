import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/UserSlice';
import { alertReducer } from './alert/AlertSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
