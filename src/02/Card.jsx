import './Card.css'
import profilePic from '../assets/profile.png'

export default function Card(){
  return(
    <div className='card'>
      {/* <img className='card-image' src="https://via.placeholder.com/150" alt="profile image" /> */}
      <img className='card-image' src={profilePic} alt="" />
      <h2 className='card-title'>Test</h2>
      <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ducimus, laborum, non facilis debitis fuga sit laudantium vitae suscipit nemo atque vero commodi consectetur nihil porro dolor culpa enim asperiores.</p>
    </div>
  )
}