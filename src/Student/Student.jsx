// Import Styles for student components only
import style from './Student.module.css'

function Student(props){
  return(
    <>
      <div className={style.student}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes": "No"}</p>
      </div>
    </>
  )
}

export default Student;