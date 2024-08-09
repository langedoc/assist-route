import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './routesSlice';
import componentsVisibilityReducer from './componentsVisibilitySlice';


export const store = configureStore({
  reducer: {
    routes: routesReducer,
    componentsVisibility: componentsVisibilityReducer,
  },
})