import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DropdownListRoutes from './components/DropdownListRoutes/DropdownListRoutes';
import AllStudentsList from './components/AllStudentsList/AllStudentsList';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';
import StudentCard from './components/StudentCard/StudentCard';
import RouteCaroussel from './components/RoutesCaroussel/RoutesCaroussel';
import { useSelector } from 'react-redux';
import { selectStudentsList, selectNewStudentForm, selectStudentCard } from './store/componentsVisibilitySlice';
import { fetchStudents } from './store/students-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const showStudents = useSelector(selectStudentsList);
  const showNewStudentForm = useSelector(selectNewStudentForm);
  const showStudentCard = useSelector(selectStudentCard);

  // Fetching data on init
  useEffect( () => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <>
      < NavBar/>
      <main>
        <RouteCaroussel/>
        <DropdownListRoutes/>
        {showStudents && (
          <div className="overlay">
            <AllStudentsList/>
          </div>
        )}
        {showNewStudentForm && (
          <div className="overlay">
            <NewStudentForm/>
          </div>
        )}
        {showStudentCard && (
          <div className="overlay">
            <StudentCard/>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
