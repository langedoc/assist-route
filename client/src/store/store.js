import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './routesSlice';
import studentsReducer from './studentsSlice';
import componentsVisibilityReducer from './componentsVisibilitySlice';


export const store = configureStore({
  reducer: {
    routes: routesReducer,
    students: studentsReducer,
    componentsVisibility: componentsVisibilityReducer,
  },
})