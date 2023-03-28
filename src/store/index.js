import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from "./todoSlice"

const store = configureStore({
  reducer: {
    counter: countReducer,
    todo: todoReducer,
  },
});

export default store;
