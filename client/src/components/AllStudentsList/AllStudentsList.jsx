import './AllStudentsList.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiStudentDuotone } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStudentsList, toggleNewStudentForm, toggleStudentCard } from '../../store/componentsVisibilitySlice';
import { selectStudents, setSelectedStudent } from '../../store/studentsSlice';

function AllStudentsList () {

  const students = useSelector(selectStudents);
  
  const dispatch = useDispatch();

  const onClose = () => dispatch(toggleStudentsList());
  const onSubmit = () => dispatch(toggleNewStudentForm());
  const onClickOnStudent = () => dispatch(toggleStudentCard());

  function handleSelectStudent (e) {
    const { value } = e.target;
    dispatch(setSelectedStudent(value));
  }

  return (
    <div className="listContainer">
      <AiFillCloseCircle
        className="close"
        onClick={() => { onClose() }}
        aria-label="Close"
      />
      <button
        id="addNewStudentButton"
        onClick={() => { onClose(); onSubmit();}}
      >
        Add new student
      </button>
      <div id="allStudentsList" className="list">
        {students.map((student) => (
          <div key={student.id}>
            <PiStudentDuotone />
            <button
              name="studentInfo"
              value={student.id}
              type="button"
              className="studentButton"
              onClick={(e) => {
                handleSelectStudent(e);
                onClickOnStudent();
                onClose()
              }}
            >
              {student.firstName} {student.lastName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllStudentsList;