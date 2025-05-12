
import { Link, useNavigate } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => {
  const navigate= useNavigate();
  return (
    <div className="not-found-container">
      <div className="not-found-content">
      <div className="error-animation">
        <span className="error-digit">4</span>
        <div className="astronaut">
        <div className="helmet"></div>
        <div className="face">
          <div className="eyes"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="arms"></div>
        </div>
        <span className="error-digit">4</span>
      </div>
      <h1 className="error-title">Oops! Página no encontrada</h1>
      <p className="error-message">
        Parece que la página que buscas se ha perdido en el espacio.
        <br />
        Puedes volver a la página de inicio o explorar otros contenidos.
      </p>
      <div className="action-buttons">
        <button 
        onClick={() =>navigate('/')}
        style={{ marginRight: '10px' }}
        className="home-button"
        >
        Volver al inicio
        </button>
        <button 
        onClick={() => navigate(-1)}
        style={{ marginLeft: '10px' }}
        className="back-button"
        >
        Regresar
        </button>
      </div>
      <div className="additional-links">
        <a href="/ayuda" className="help-link" style={{ textDecoration: 'none' }}>¿Necesitas ayuda?</a>
        <Link to="/contacto" className="contact-link" style={{ textDecoration: 'none' }}>Contacto</Link>
      </div>
      </div>
    </div>
    );
};

export default NotFound;