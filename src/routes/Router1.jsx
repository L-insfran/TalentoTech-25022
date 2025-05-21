import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Carrito from '../components/Carrito'
import Home from '../layout/Home'
import Acercade from '../pages/Acercade'
import Contacto from '../pages/ContactForm'
import FinalizaCompra from '../pages/FinalizaCompra'
import NotFound from '../pages/NotFound'

const Router1 = () => {
  
  const [cart, setCart] = useState([])

  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      // Verificar si el producto ya existe en el carrito
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex >= 0) {
        // Si existe, actualizar la cantidad
        return prevCart.map((item, index) => 
          index === existingProductIndex 
            ? { ...item, cantidad: item.cantidad + (product.cantidad || 1) } 
            : item
        );
      } else {
        // Si no existe, agregar el producto con cantidad 1 (o la cantidad que traiga)
        return [...prevCart, { ...product, cantidad: product.cantidad || 1 }];
      }
    });
  }

  const handleEliminar = (id) => {
    setCart(prevCart => prevCart.filter(producto => producto.id !== id));
  };

  const handleVaciar = () => {
    setCart([]);
  }

  const onActualizarCantidad = (id, nuevaCantidad) => {
    // Validar que la cantidad no sea menor a 1
    const cantidad = Math.max(1, nuevaCantidad);
    
    setCart(prevCart => 
      prevCart.map(producto => 
        producto.id === id 
          ? { ...producto, cantidad } 
          : producto
      )
    );
  };

  return (
    <Routes>
      <Route 
        path='/' 
        element={
          <Home 
            cart={cart} 
            handleAddToCart={handleAddToCart}
          />
        } 
      />
      <Route 
        path='/carrito' 
        element={
          <Carrito  
            productos={cart}
            onEliminarProducto={handleEliminar} 
            onVaciarCarrito={handleVaciar}
            onActualizarCantidad={onActualizarCantidad}
            onSeguirComprando={() => navigate('/')}

          />
        } 
      />
      <Route 
        path='/finalizaCompra' 
        element={<FinalizaCompra />} />
      <Route 
        path='/acerca' 
        element={<Acercade 
          productos={cart}
        />}  />
      <Route
        path='/contacto' 
        element={<Contacto 
          productos={cart}
        />} />
      <Route 
      path='*'
      element={<NotFound  />} />
    </Routes>
  )
}

export default Router1