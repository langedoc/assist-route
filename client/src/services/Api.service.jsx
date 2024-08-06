import routesData from '../data/routesData.json';

const studentsUrl = 'http://localhost:3000/students'; // URL of the DB with students data

export async function initFetchData ({setStudents, setRoutes}) {
  try {
    // Fetch students data
    const studentsResponse = await fetch(studentsUrl);
    const studentsBody = await studentsResponse.json();
    const sortedStudentsBody = studentsBody.sort( (a, b) => 
      a.firstName.localeCompare(b.firstName)
    ); // Students are sorted by name in alphabetical order
    setStudents (sortedStudentsBody);
        
    // Set routes data from JSON file
    setRoutes(routesData);
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
}

export async function deleteStudent(id) {
  return await fetch(
      'http://localhost:3000/students/' + id,
      {
        method: 'DELETE',
        mode: 'cors',
      }
  );
}