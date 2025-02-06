import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeMaxValueAC = createAction<{ maxValue: number }>(
  'config/changeMaxValue'
);

export const changeStartValueAC = createAction<{ startValue: number }>(
  'config/changeStartValue'
);

const initialState = {
  startValue: 0,
  maxValue: 0,
};

export const configReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeStartValueAC, (state, action) => {
      state.startValue = action.payload.startValue
    })
    .addCase(changeMaxValueAC, (state, action) => {
      state.maxValue = action.payload.maxValue 
    });
});
