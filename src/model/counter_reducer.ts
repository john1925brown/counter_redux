import { createAction, createReducer } from '@reduxjs/toolkit';

export const incValueAC = createAction('counter/incValue');
export const resetValueAC = createAction('counter/resetValue');

const initialState: number = 0;

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incValueAC, (state) => {
      return state + 1;
    })
    .addCase(resetValueAC, () => {
      return 0;
    });
});
