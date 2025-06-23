import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('http://localhost:3001/productos')
        .then(response => {
          setProductos(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar productos:', error);
          setLoading(false);
        });
    }, []);
  
  const agregarCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad: cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );
  
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
  
    setCarrito(nuevoCarrito);
    toast.success(`${item.nombre || item.title} agregado al carrito`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const VaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
   
  };
  const aumentarCantidad = (itemId) => {
    const actualizarCarrito = [...carrito];
    const itemactualizado = actualizarCarrito.find((prod) => prod.id === itemId);

    if (itemactualizado && itemactualizado.stock > itemactualizado.cantidad) {
      itemactualizado.cantidad += 1;
      setCarrito(actualizarCarrito);
      CalcularTotal();
    }
  };
  const eliminarCarrito = (itemId) => {
    setCarrito((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };
  const CalcularTotal = () => {
    const total = carrito.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
    setTotal(total);
    return total;
  };
  const disminuirCantidad = (itemId) => {
    const actualizarCarrito = [...carrito];
    const itemactualizado = actualizarCarrito.find((prod) => prod.id === itemId);

    if (itemactualizado && itemactualizado.cantidad > 1) {
      itemactualizado.cantidad -= 1;
      setCarrito(actualizarCarrito);
      CalcularTotal();
    
    }
  };

  return (
    <CartContext.Provider value={{ 
      carrito, 
      agregarCarrito, 
      eliminarCarrito,
      cantidadEnCarrito,
      CalcularTotal,
      VaciarCarrito,
      aumentarCantidad,
      disminuirCantidad,
      productos,
      loading,
      setLoading
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
