import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './routesSlice';
import studentsListReducer from './studentsListSlice';

export const store = configureStore({
  reducer: {
    routes: routesReducer,
    studentsList: studentsListReducer,
  },
})