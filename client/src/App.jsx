import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DropdownListRoutes from './components/DropdownListRoutes/DropdownListRoutes';
import AllStudentsList from './components/AllStudentsList/AllStudentsList';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';
import StudentCard from './components/StudentCard/StudentCard';
import { initFetchData } from './services/Api.service';
import RouteCaroussel from './components/RoutesCaroussel/RoutesCaroussel';
import { useSelector } from 'react-redux';

function App() {
  const [routes, setRoutes] = useState([]); // routes data
  const [students, setStudents] = useState([]); // students data
  const showStudents = useSelector((state) => state.studentsList.showStudentsList);
  console.log(showStudents);
  const [showNewStudentForm, setShowNewStudentForm ] = useState(false); // condition to show the form for adding new student on button click
  const [showStudentCard, setShowStudentCard] = useState(false); // condition to show the card with complete information about student
  const [selectedStudent, setSelectedStudent] = useState('');

  // Fetching data on init
  useEffect( () => {
    initFetchData({setStudents, setRoutes});
  }, []);

  return (
    <>
      < NavBar/>
      <main>
        <RouteCaroussel routes={routes} />
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
