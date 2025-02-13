import { createAction, createReducer } from '@reduxjs/toolkit';

export const incValueAC = createAction('counter/incValue');
export const resetValueAC = createAction<{ startValue: number }>(
  'counter/resetValue'
);
export const changeMaxValueAC = createAction<{ maxValue: number }>(
  'counter/changeMaxValue'
);
export const changeStartValueAC = createAction<{ startValue: number }>(
  'counter/changeStartValue'
);

const initialState = {
  value: 0,
  startValue: 0,
  maxValue: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incValueAC, (state) => {
      state.value = state.value + 1;
    })
    .addCase(resetValueAC, (state, action) => {
      state.value = action.payload.startValue;
    })
    .addCase(changeStartValueAC, (state, action) => {
      state.startValue = action.payload.startValue;
    })
    .addCase(changeMaxValueAC, (state, action) => {
      state.maxValue = action.payload.maxValue;
    });
});