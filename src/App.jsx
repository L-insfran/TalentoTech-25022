import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Acercade from './pages/Acercade';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import FinalizaCompra from './components/FinalizarCompra';
import { CartProvider } from './context/CartContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './Router/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ToastContainer />
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

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}


export default App;