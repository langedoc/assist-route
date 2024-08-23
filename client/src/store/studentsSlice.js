import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [],
    selectedStudent: '',
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
        setSelectedStudent: (state, action) => {
            state.selectedStudent = action.payload;
        },
    }
});

export const { setStudents, setSelectedStudent } = studentsSlice.actions;
export const selectStudents = (state) => state.students.students;
export const selectSelectedStudent = (state) => state.students.selectedStudent;
export default studentsSlice.reducer;
