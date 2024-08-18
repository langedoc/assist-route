import './RouteInfoDisplay.css';
import { TbBusStop } from 'react-icons/tb';
import { PiStudentDuotone } from 'react-icons/pi';
import { selectRouteInfo } from '../../store/routesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStudentCard } from '../../store/componentsVisibilitySlice';

function RouteInfoDisplay ({ students, setStopStudents, stopStudents, setSelectedStudent}) {
  
  const routeInfo = useSelector(selectRouteInfo);
  const dispatch = useDispatch();

  function handleSelectStop (event) {
    const {value} = event.target;
    setStopStudents(students.filter( student => ((student.morningRoute === routeInfo[0].name && student.morningStop === value) || ( student.eveningRoute === routeInfo[0].name && student.eveningStop === value))));
  }

  function handleSelectStudent (e) {
    const { value } = e.target;
    setSelectedStudent(value);
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
        <div id="stopsList" className="list">
          {routeInfo[0].stops.map((stop) => (
            <>
              <TbBusStop /> 
              <button
                name="See students"
                type="button"
                className="stopButton"
                key={stop.id}
                onClick={handleSelectStop}
                value={stop.name}
              >
                {stop.name}
              </button>
            </>
          ))}
        </div>
        <div id="stopStudentsList" className="listContainer">
          <p className="italicThin">
            Click on the user to see complete information
          </p>
          <div className="list">
            {stopStudents.map( student => (
              <>
                <PiStudentDuotone className='studentIcon' />
                <button
                  className="studentButton"
                  key={student.id}
                  value={student.id}
                  onClick={(e) => {handleSelectStudent(e)}}>
                    {student.firstName} {student.lastName}
                  </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteInfoDisplay;