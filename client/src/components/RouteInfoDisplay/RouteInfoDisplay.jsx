import './RouteInfoDisplay.css';
import { TbBusStop } from 'react-icons/tb';
import { PiStudentDuotone } from 'react-icons/pi';
import { selectRouteInfo } from '../../store/routesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStudentCard } from '../../store/componentsVisibilitySlice';
import { selectStudents, setSelectedStudent, selectStopStudents, setStopStudents } from '../../store/studentsSlice';

function RouteInfoDisplay () {
  
  const routeInfo = useSelector(selectRouteInfo);
  const students = useSelector(selectStudents);
  const stopStudents = useSelector(selectStopStudents);
  const dispatch = useDispatch();

  function handleSelectStop (event) {
    const {value} = event.target;
    dispatch(
    setStopStudents(students.filter( student => ((student.morningRoute === routeInfo[0].name && student.morningStop === value) || ( student.eveningRoute === routeInfo[0].name && student.eveningStop === value))))
    );
  }

  function handleSelectStudent (e) {
    const { value } = e.target;
    dispatch(setSelectedStudent(value));
    dispatch(toggleStudentCard());
  }

  return (
    <div id="routeDisplay">
      <h3>
        {routeInfo[0].name} {routeInfo[0].type}{' '}
      </h3>
      <p className="italicThin">
        Choose the stop to see the users of the stop
      </p>
      <div id="routeInfoDisplay">
        <div className="d-grid gap-2">
          {routeInfo[0].stops.map((stop) => (
            <div key={stop.id}>
              <TbBusStop /> 
              <button
                name="See students"
                type="button"
                className="btn stopButton"
                onClick={handleSelectStop}
                value={stop.name}
              >
                {stop.name}
              </button>
            </div>
          ))}
        </div>
        <div id="stopStudentsList" className="listContainer">
          <p className="italicThin">
            Click on the user to see complete information
          </p>
          <div className="d-grid gap-2">
            {stopStudents.map( student => (
              <div key={student.id}>
                <PiStudentDuotone className='studentIcon' />
                <button
                  className="btn studentButton"
                  value={student.id}
                  onClick={(e) => {handleSelectStudent(e)}}>
                    {student.firstName} {student.lastName}
                  </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteInfoDisplay;