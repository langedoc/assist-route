import 'bootstrap/dist/css/bootstrap.min.css';
import './RouteCard.css';
import Sabadell from '../../assets/RoutesImages/Sabadell.svg';

export default function RouteCard({ route }) {
  return (
    <div className="card card-container">
      <img src={Sabadell} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{route.name}</h5>
        <p className="card-text">{route.type}</p>
      </div>
    </div>
    );
}