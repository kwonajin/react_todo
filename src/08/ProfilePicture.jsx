import { useState } from "react";
export default function ProfilePicture(){

  const imgurl = './src/assets/profile.png';

  let displayVales = ""
  // const styles = {display:displayVales}

  const handleClick = () => {
    displayVales ? displayVales = "" : displayVales = "none" 
    console.log(displayVales)
    document.getElementById('dis').style.display = displayVales
  } 

  const [display,setDisplay] = useState("");
  // const styles1 = {display:display}
  // const handleClick1 = () => {
    // setDisplay(display ? "" : "none" )
  // }

  return(
    <>
    <img src={imgurl} id="dis"></img>
    <button onClick={handleClick}>이미지1</button>
    {/* <br/>
    <img src={imgurl} style={styles1}></img>
    <button onClick={handleClick1}>이미지2</button> */}
    </>
  )
}
