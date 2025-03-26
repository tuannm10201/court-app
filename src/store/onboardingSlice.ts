import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { MAX_STEP, Step } from '../data/common';

interface OnboardingState {
  step: Step;
  email: string;
  password: string;
  sports: Record<string, number>;
  isCreatedSuccess: boolean;
}

const initialState: OnboardingState = {
  step: 1,
  email: '',
  password: '',
  sports: {},
  isCreatedSuccess: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    createSuccess(state) {
      Object.assign(state, {
        ...initialState,
        step: 3,
        isCreatedSuccess: true,
      });
    },
    backStep(state) {
      if (state.step !== 1) state.step--;
    },
    nextStep(state) {
      if (state.step !== MAX_STEP && !state.isCreatedSuccess) state.step++;
    },
    changeEmailPassword(state, action: PayloadAction<{ email: string; password: string }>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    updateSports(state, action: PayloadAction<OnboardingState['sports']>) {
      state.sports = action.payload;
    },
  },
});

export const { createSuccess, nextStep, backStep, changeEmailPassword, updateSports } =
  onboardingSlice.actions;
export default onboardingSlice.reducer;
