import { setStudents } from './studentsSlice';

const studentsUrl = 'http://localhost:3000/students'; // URL of the DB with students data

export const fetchStudents = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(studentsUrl);

      if (!response.ok) {
        throw new Error('Could not fetch students data!');
      }

      const data = await response.json();
      return data;
    }; 

    try {
      const studentsData = await fetchData();
      dispatch(setStudents(studentsData));
    } catch (error) {
        console.log('Error fetching data: ', error);
    }
  };
};