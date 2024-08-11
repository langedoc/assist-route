import { useState, useEffect } from 'react';
import RouteInfoDisplay from '../RouteInfoDisplay/RouteInfoDisplay';
import './DropdownListRoutes.css';
import { routes } from '../../data/routesData.js';

function DropdownListRoutes ({ students, setSelectedStudent, setShowStudentCard, onClose}) {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routeInfo, setRouteInfo] = useState(null);
  const [stopStudents, setStopStudents] = useState([]);

  // Function to set the selected route
  const handleSelectChange = (event) => {
    setSelectedRoute(event.target.value);
    setStopStudents([]);
  };

  // To display info of the selected route in the route info display section
  useEffect(() => {
    if (selectedRoute) {
      const selectedRouteInfo = routes.filter(
        route => route.id === selectedRoute
      );
      setRouteInfo(selectedRouteInfo);
    } else {
      setRouteInfo(null);
    }
  }, [selectedRoute]);

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
          routeInfo={routeInfo}
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