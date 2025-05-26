import { FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthUser } from '../context/ContextUser';
import './RutaProtegida.css'; // Archivo CSS que crearemos

const RutaProtegida = ({ children }) => {
  const { userAutorizado } = useAuthUser()
  
  return (
    <>
      {userAutorizado ? (
        children
      ) : (
        <div className="protected-route-container">
          <div className="access-denied-card">
            <div className="access-denied-icon">
              <FaLock size={50} />
            </div>
            <h1 className="access-denied-title">Acceso Restringido</h1>
            <p className="access-denied-message">
              Necesitas una cuenta para acceder a esta sección
            </p>
            
            <div className="access-denied-actions">
              <Link to="/login" className="auth-button login-button">
                <FaSignInAlt className="button-icon" />
                Iniciar Sesión
              </Link>
              <Link to="/register" className="auth-button register-button">
                <FaUserPlus className="button-icon" />
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RutaProtegida