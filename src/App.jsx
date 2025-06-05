import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Acercade from './pages/Acercade';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import FinalizaCompra from './components/FinalizarCompra';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './Router/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<Acercade />} />
            <Route path="/login" element={<Login />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/productos/:id' element={<DetalleProducto />} />
            <Route path='/finalizaCompra' element={
              <ProtectedRoute>
                <FinalizaCompra/>
              </ProtectedRoute>
              } /> 

          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}


export default App;