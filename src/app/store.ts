import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../model/counter_reducer';
import { configReducer } from '../model/config_reducer';

const rootReducer = combineReducers({
  counter: counterReducer, 
  config: configReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
