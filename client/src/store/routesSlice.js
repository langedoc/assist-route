import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    routes: [],
    selectedRoute: '',
    routeInfo: null,
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setRoutes: (state, action) => {
            state.routes = action.payload;
        },
        setSelectedRoute: (state, action) => {
            state.selectedRoute = action.payload;
        },
        setRouteInfo: (state, action) => {
            state.routeInfo = action.payload;
        },
    }
})

export const { setRoutes, setSelectedRoute, setRouteInfo } = routesSlice.actions;
export const selectRouteInfo = (state) => state.routes.routeInfo;
export const selectRoutes = (state) => state.routes.routes;
export const selectSelectedRoute = (state) => state.routes.selectedRoute;
export default routesSlice.reducer;


