import './UserGreeting.css'
import PropTypes from 'prop-types'

export default function UserGreeting(props){
  // if(props.isLoggedIn){
  //   return <h2>Welcome {props.username}</h2>
  // }else{
  //   return <h2>Pleaase log in to continue</h2>
  // }

  const welcomeMessage =  <h2 className='welcome-message'>Welcome {props.username}</h2>
  const loginPrompt = <h2 className='login-promp'>Pleaase log in to continue</h2>
  
  return(
    <>
      {props.isLoggedIn && welcomeMessage}
      {props.isLoggedIn || loginPrompt}
    </>
  )
}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool, 
  username: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}