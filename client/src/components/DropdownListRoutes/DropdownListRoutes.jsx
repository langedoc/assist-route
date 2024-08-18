import { useState, useEffect } from 'react';
import RouteInfoDisplay from '../RouteInfoDisplay/RouteInfoDisplay';
import './DropdownListRoutes.css';
import { routes } from '../../data/routesData.js';
import { selectSelectedRoute, setSelectedRoute, selectRouteInfo, setRouteInfo  } from '../../store/routesSlice';
import { useSelector, useDispatch } from 'react-redux';

function DropdownListRoutes ({ students, setSelectedStudent, setShowStudentCard, onClose}) {


  const routeInfo = useSelector(selectRouteInfo);
  const selectedRoute = useSelector(selectSelectedRoute);
  const [stopStudents, setStopStudents] = useState([]);

  const dispatch = useDispatch();

  // Function to set the selected route
  const handleSelectChange = (event) => {
    const selectedRoute = event.target.value;
    dispatch(setSelectedRoute(selectedRoute));
    setStopStudents([]);
  };

  // To display info of the selected route in the route info display section
  useEffect(() => {
    if (selectedRoute) {
      const selectedRouteInfo = routes.filter(
        route => route.id === selectedRoute
      );
      dispatch(setRouteInfo(selectedRouteInfo));
    } else {
      dispatch(setRouteInfo(null));
    }
  }, [ selectedRoute, dispatch]);

  return (
    <div id="routeInfoContainer">
      <select
        id="dropdownRoutes"
        value={selectedRoute}
        onChange={handleSelectChange}
      >
        <option disabled value=''>
          Choose your route...
        </option>
        {routes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name} - {route.type}
          </option>
        ))}
      </select>
      {routeInfo && (
        <RouteInfoDisplay
          students={students}
          stopStudents={stopStudents}
          setStopStudents={setStopStudents}
          setSelectedStudent={setSelectedStudent}
          setShowStudentCard={setShowStudentCard}
          onClose={onClose}
        />)}
    </div>
  );
}

export default DropdownListRoutes;