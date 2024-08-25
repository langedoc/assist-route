import 'bootstrap/dist/css/bootstrap.min.css';
import './RouteCard.css';
import Sabadell from '../../assets/RoutesImages/Sabadell.svg';
import { routes } from '../../data/routesData.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRoute, selectSelectedRoute, setRouteInfo } from '../../store/routesSlice';
import { setStopStudents } from '../../store/studentsSlice';

export default function RouteCard({ route }) {

  const dispatch = useDispatch();

  const selectedRoute = useSelector(selectSelectedRoute);

  // Function to set the selected route
  const handleClick = () => {
    dispatch(setSelectedRoute(`${route.id}`));
    dispatch(setStopStudents([]));
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
    <div
      className={`card card-container ${route.type==='evening' ? 'evening' : 'morning'}`}
      onClick = {handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={Sabadell} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{route.name}</h5>
        <p className="card-text">{route.type}</p>
      </div>
    </div>
    );
}