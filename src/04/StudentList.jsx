import Student from "./Student"
export default function StudentList(){
  return(
    <>
      <Student name="홍길동" age={23} isStudent={true}/>
      <Student name="김철수" age={20} isStudent={false}/>
      <Student/>
    </>
  )
}