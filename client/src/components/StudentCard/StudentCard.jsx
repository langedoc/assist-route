import './StudentCard.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toggleStudentCard } from '../../store/componentsVisibilitySlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectStudents, selectSelectedStudent, setStudents } from '../../store/studentsSlice';
import { deleteStudent } from '../../store/students-actions';

function StudentCard () {
  
  const students = useSelector(selectStudents);
  const selectedStudent = useSelector(selectSelectedStudent);

  const dispatch = useDispatch();
  const onClose = () => dispatch(toggleStudentCard());
  
  const studentData = students.filter( student => student.id === parseInt(selectedStudent))[0];
  const dataToRender = Object.entries(studentData);
  const dataToRenderShort = dataToRender.slice(1);

  function camelToText (camelCase) {
    return camelCase.replace(/([A-Z])/g, ' $1').toLowerCase();
  }

  function isISODateString(value) {
    // To check if the string matches the ISO date format (YYYY-MM-DDTHH:MM:SSZ)
    return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  const studentInfoElements = dataToRenderShort.map(([key, value]) => {
    let formattedValue = value;

    if (isISODateString(value)) {
      formattedValue = formatDate(value);
    }

    return (
      <div key={key} className="studentInfoEl">
        <p id="elValue">
          <span className="italicThin">{camelToText(key)}: </span>
          <strong>{formattedValue}</strong>
        </p>  
      </div>
    );
  });

  
  async function handleDelete () {
    // delete student from DB
    dispatch(deleteStudent(studentData.id));
    // delete student from list
    const newStudents = students.filter( student => student.id !== studentData.id);
    dispatch(setStudents(newStudents));
  }
  

  return (
    <div className="overlay">
      <div className="listContainer">
        <AiFillCloseCircle
          className="close"
          onClick={onClose}
          aria-label="Close"
        />
        <div className="fieldsList">
          {studentInfoElements}
        </div>
        <button
          type="button"
          name="deleteStudentButton"
          style={{borderRadius: '5px'}}
          onClick={()=>{handleDelete(); onClose();}}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default StudentCard;