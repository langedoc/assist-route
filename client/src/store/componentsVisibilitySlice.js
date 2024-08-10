import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showStudentsList: false,
    showNewStudentForm: false,
};

export const componentsVisibilitySlice = createSlice({
    name: 'componentsVisibility',
    initialState,
    reducers: {
        toggleStudentsList: (state) => {
            state.showStudentsList = !state.showStudentsList;
        },
        toggleNewStudentForm: (state) => {
            state.showNewStudentForm = !state.showNewStudentForm;
          },
    },
});

export const { toggleStudentsList, toggleNewStudentForm} = componentsVisibilitySlice.actions;
export default componentsVisibilitySlice.reducer;