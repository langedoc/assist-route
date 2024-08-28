import { toggleStudentsList } from '../../store/componentsVisibilitySlice';
import './NavBar.css';
import { useDispatch } from 'react-redux';

function NavBar () {

  const dispatch = useDispatch();

  return (
    <nav>
      <div>
        <h1 className="abel-regular" style={{ fontSize: "2.7rem" }}>
          ASSIST ROUTE
        </h1>
      </div>
      <button
        onClick={() => dispatch(toggleStudentsList())}
        style={{borderRadius: '5px'}}
        type="button"
      >
        Manage students
      </button>
    </nav>
  );
}

export default NavBar;