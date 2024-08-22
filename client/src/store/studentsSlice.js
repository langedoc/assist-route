import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [],
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
    }
})

export const { setStudents } = studentsSlice.actions;
export const selectStudents = (state) => state.students.students;
export default studentsSlice.reducer;
