import './Student.css'
import PropTypes from 'prop-types'

export default function Student(props){
  console.log(props)
  return(
    <div className='student'>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "yes" : "no"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

