// import styles from './Button.module.css'

export default function Button(){
  const styles = {
  backgroundColor: "rgb(167, 184, 198)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  }
  return(
    <button style={styles}>
      Click me
    </button>
  )
}