import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import onboardingSlice from './onboardingSlice';

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    onboarding: onboardingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
