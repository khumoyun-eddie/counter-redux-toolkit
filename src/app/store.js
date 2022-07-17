import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
