import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeErrorValueAC = createAction<{error: boolean}>('error/changeErrorValueAC');

const initialState = {
  error: false,
};

export const errorReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeErrorValueAC, (state, action) => {
    state.error = action.payload.error
  });
});
