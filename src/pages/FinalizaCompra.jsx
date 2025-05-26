import { useNavigate } from "react-router-dom";


const FinalizaCompra = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Muchas Gracias por su compra</h1>
      <button onClick={() => navigate('/')}>Volver a la web</button>
    </>
  )
}

export default FinalizaCompra
