export default function Button(){ 

  const handleClick = () => console.log("ouch!")
  const handleClick2 = (name) => console.log(`${name} stop clicking me`)
  let count = 0
  const handleClick3 = () => {
    if(count<3){
      count++
      console.log(`${name} you clicked me ${count} items`)
    }else{
      console.log(`${name} stop clicking me! ${count}`)
    }
  }
  const handleClick4 = (e) => {
    console.log(e)
    e.target.textContent="🐈"
  }

  return(
    <>
    <button onClick={handleClick}>Click me✨</button>
    <button onClick={()=>handleClick2("홍길동")}>Click me 🎧</button>
    <button onClick={()=>handleClick3("홍길동")}>Click me {count}</button>
    <button onClick={(e)=>handleClick4(e)}>Click me</button>
    </>
  )
}