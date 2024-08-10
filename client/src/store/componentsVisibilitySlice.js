import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showStudentsList: false,
    showNewStudentForm: false,
    showStudentCard: false,
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
        toggleStudentCard: (state) => {
            state.showStudentCard = !state.showStudentCard;
        },
    },
});

export const { toggleStudentsList, toggleNewStudentForm, toggleStudentCard} = componentsVisibilitySlice.actions;
export default componentsVisibilitySlice.reducer;