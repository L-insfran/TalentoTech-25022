import { useState } from 'react';
import { FaPhone, FaSignInAlt, FaUser } from 'react-icons/fa';
import { useAuthUser } from '../context/ContextUser'
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { login } = useAuthUser();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    celular: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      nombre: '',
      apellido: '',
      celular: ''
    };

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
      valid = false;
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
      valid = false;
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'El celular es requerido';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.celular)) {
      newErrors.celular = 'Celular debe tener 10 dígitos';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login(formData);
      
      alert(`Bienvenido ${formData.nombre} ${formData.apellido}!`);
      navigate('/carrito');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Ingresa tus datos para continuar</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              <FaUser className="input-icon" />
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`form-input ${errors.nombre ? 'input-error' : ''}`}
              placeholder="Ej: Juan"
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apellido" className="form-label">
              <FaUser className="input-icon" />
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`form-input ${errors.apellido ? 'input-error' : ''}`}
              placeholder="Ej: Pérez"
            />
            {errors.apellido && <span className="error-message">{errors.apellido}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="celular" className="form-label">
              <FaPhone className="input-icon" />
              Celular
            </label>
            <input
              type="tel"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className={`form-input ${errors.celular ? 'input-error' : ''}`}
              placeholder="Ej: 3101234567"
              maxLength="10"
            />
            {errors.celular && <span className="error-message">{errors.celular}</span>}
          </div>

          <button type="submit" className="login-button">
            <FaSignInAlt className="button-icon" />
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
