import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../feature/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
