import RouteCard from '../RouteCard/RouteCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoutesCaroussel.css';
import { routes } from '../../data/routesData';

export default function RoutesCaroussel() {
  return (
    <div className="route-caroussel">
      {routes.map( route => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  );
}