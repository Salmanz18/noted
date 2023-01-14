import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import noteReducer from '../redux/notes/noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: noteReducer,
  },
});
