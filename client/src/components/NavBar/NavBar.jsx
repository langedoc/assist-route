import './NavBar.css';

function NavBar ({ toggleStudentsList }) {

  return (
    <nav>
      <div>
        <h1 id="projectName" className="lilita-one-regular">
          ASSIST ROUTE
        </h1>
      </div>
      <button onClick={toggleStudentsList}>Manage students</button>
    </nav>
  );
}

export default NavBar;