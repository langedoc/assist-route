import RouteCard from '../RouteCard/RouteCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoutesCaroussel.css';

export default function RoutesCaroussel({ routes }) {
  return (
    <div className="route-caroussel">
      {routes.map( route => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  );
}