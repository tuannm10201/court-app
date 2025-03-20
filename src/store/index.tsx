import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';

export default configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
