import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DropdownListRoutes from './components/DropdownListRoutes/DropdownListRoutes';
import AllStudentsList from './components/AllStudentsList/AllStudentsList';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';
import StudentCard from './components/StudentCard/StudentCard';
// import { initFetchData } from './services/Api.service';
import RouteCaroussel from './components/RoutesCaroussel/RoutesCaroussel';
import { useSelector } from 'react-redux';
import { selectStudentsList, selectNewStudentForm, selectStudentCard } from './store/componentsVisibilitySlice';
import { fetchStudents } from './store/students-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]); // students data
  const showStudents = useSelector(selectStudentsList);
  const showNewStudentForm = useSelector(selectNewStudentForm);
  const showStudentCard = useSelector(selectStudentCard);
  const [selectedStudent, setSelectedStudent] = useState('');

  // Fetching data on init
  useEffect( () => {
    // initFetchData({setStudents});
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <>
      < NavBar/>
      <main>
        <RouteCaroussel/>
        <DropdownListRoutes 
          students={students}
          setSelectedStudent={setSelectedStudent}
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
              setStudents={setStudents}
              students={students}
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
