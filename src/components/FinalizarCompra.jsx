import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const FinalizaCompra = () => {

  const { VaciarCarrito } = useCartContext();

  useEffect(() => {
    VaciarCarrito();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <h1>Muchas Gracias por su compra</h1>
      <button onClick={() => navigate('/')}>Volver a la web</button>
    </>
  )
}

export default FinalizaCompra
