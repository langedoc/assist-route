import { toggleStudentsList } from '../../store/componentsVisibilitySlice';
import './NavBar.css';
import { useDispatch } from 'react-redux';

function NavBar () {

  const dispatch = useDispatch();

  return (
    <nav>
      <div>
        <h1 id="projectName" className="lilita-one-regular">
          ASSIST ROUTE
        </h1>
      </div>
      <button onClick={() => dispatch(toggleStudentsList())}>Manage students</button>
    </nav>
  );
}

export default NavBar;