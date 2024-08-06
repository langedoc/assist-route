import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DropdownListRoutes from './components/DropdownListRoutes/DropdownListRoutes';
import AllStudentsList from './components/AllStudentsList/AllStudentsList';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';
import StudentCard from './components/StudentCard/StudentCard';
import { initFetchData } from './services/Api.service';



function App() {
  const [routes, setRoutes] = useState([]); // routes data
  const [students, setStudents] = useState([]); // students data
  const [showStudents, setShowStudents] = useState(false); // condition to show the list of students on button click
  const [showNewStudentForm, setShowNewStudentForm ] = useState(false); // condition to show the form for adding new student on button click
  const [showStudentCard, setShowStudentCard] = useState(false); // condition to show the card with complete information about student
  const [selectedStudent, setSelectedStudent] = useState('');

  // Fetching data on init
  useEffect( () => {
    initFetchData({setStudents, setRoutes});
  }, []);

  // Function to control visibility of the list of all students
  function toggleStudentsList () {
    setShowStudents(!showStudents);
  }

  return (
    <>
      < NavBar toggleStudentsList={toggleStudentsList}/>
      <main>
        <DropdownListRoutes 
          routes={routes}
          students={students}
          setSelectedStudent={setSelectedStudent}
          setShowStudentCard={setShowStudentCard}
          onClose={() => setShowStudentCard(false)}
        />
        {showStudents && (
          <div className="overlay">
            <AllStudentsList 
              students={students}
              setSelectedStudent={setSelectedStudent}
              setShowStudentCard={setShowStudentCard}
              onClose={() => setShowStudents(false)}
              onSubmit={() => setShowNewStudentForm(true)}
            />
          </div>
        )}
        {showNewStudentForm && (
          <div className="overlay">
            <NewStudentForm
              routes={routes}
              setStudents={setStudents}
              students={students}
              showNewStudentForm={showNewStudentForm}
              onClose={() => setShowNewStudentForm(false)}
            />
          </div>
        )}
        {showStudentCard && (
          <div className="overlay">
            <StudentCard
              students={students}
              selectedStudent={selectedStudent}
              setStudents={setStudents}
              onClose={() => setShowStudentCard(false)}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
