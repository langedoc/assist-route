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

  function formatDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) ? date.toISOString().split('T')[0] : "N/A";//yyyy-mm-dd format
  }

  const studentInfoElements = dataToRenderShort.map(([key, value]) => {
    const formattedValue = 
      (typeof value === 'string' && !isNaN(new Date(value).getTime())) 
      ? formatDate(value) 
      : (value || "");

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