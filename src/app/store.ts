import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../model/counter_reducer';
import { errorReducer } from '../model/error_reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
