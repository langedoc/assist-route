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
  const showStudents = useSelector((state) => state.componentsVisibility.showStudentsList);
  const showNewStudentForm = useSelector((state) => state.componentsVisibility.showNewStudentForm);
  const showStudentCard = useSelector((state) => state.componentsVisibility.showStudentCard);
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
          students={students}
          setSelectedStudent={setSelectedStudent}
          // setShowStudentCard={setShowStudentCard}
          // onClose={() => setShowStudentCard(false)}
        />
        {showStudents && (
          <div className="overlay">
            <AllStudentsList 
              students={students}
              setSelectedStudent={setSelectedStudent}
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
            />
          </div>
        )}
        {showStudentCard && (
          <div className="overlay">
            <StudentCard
              students={students}
              selectedStudent={selectedStudent}
              setStudents={setStudents}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
