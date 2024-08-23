import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [],
    selectedStudent: '',
    stopStudents: [],
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
        setStopStudents: (state, action) => {
            state.stopStudents = action.payload;
        },
    }
});

export const { setStudents, setSelectedStudent, setStopStudents } = studentsSlice.actions;
export const selectStudents = (state) => state.students.students;
export const selectSelectedStudent = (state) => state.students.selectedStudent;
export const selectStopStudents = (state) => state.students.stopStudents;
export default studentsSlice.reducer;
