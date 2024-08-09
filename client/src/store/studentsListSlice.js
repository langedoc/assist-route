import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showStudentsList: 'false',
};

export const studentsListSlice = createSlice({
    name: 'studentsList',
    initialState,
    reducers: {
        toggleStudentsList: (state) => {
            state.showStudentsList = !state.showStudentsList;
        },
    },
});

export const { toggleStudentLIst} = studentsListSlice.actions;
export default studentsListSlice.reducer;