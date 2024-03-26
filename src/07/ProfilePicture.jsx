export default function ProfilePicture(){

  const imgurl = './src/assets/profile.png';
  const handleClick = (e) => {
    e.target.style.display = "none";
  }
  
  return(
    <img src={imgurl} onClick={(e)=>handleClick(e)}></img>
  )
}
