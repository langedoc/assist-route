import 'bootstrap/dist/css/bootstrap.min.css';
import './RouteCard.css';
import Sabadell from '../../assets/RoutesImages/Sabadell.svg';
import { useDispatch } from 'react-redux';
import { setSelectedRoute } from '../../store/routesSlice';
import { setStopStudents } from '../../store/studentsSlice';

export default function RouteCard({ route }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedRoute(`${route.id}`));
    dispatch(setStopStudents([]));
  };

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