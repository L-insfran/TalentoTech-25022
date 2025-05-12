import TrueFocus from "./TrueFocus"
const Header = () => {

    let estilos = {backgroundColor: "#4CAF50", padding: "10px", textAlign: "center", color: "white"}

  return (
    <header style={estilos}>
        <h1><TrueFocus 
              sentence="TIENDA ON LINE"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={3}
              pauseBetweenAnimations={1}
          /></h1>
    </header>
  )
}

export default Header

