import { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import "./styles/ContactoForm.css";


const ContactForm = ({productos}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comentario: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comentario: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const countItem = productos.length

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
      valid = false;
    } else if (formData.nombre.length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
      valid = false;
    }

    // Validación de teléfono
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
      valid = false;
    } else if (!/^[0-9+\-\s]+$/.test(formData.telefono)) {
      newErrors.telefono = 'Ingrese un número de teléfono válido';
      valid = false;
    }

    // Validación de email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
      valid = false;
    }

    // Validación de comentario
    if (!formData.comentario.trim()) {
      newErrors.comentario = 'El comentario es requerido';
      valid = false;
    } else if (formData.comentario.length < 10) {
      newErrors.comentario = 'El comentario debe tener al menos 10 caracteres';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de envío a API
      setTimeout(() => {
        console.log('Formulario enviado:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form after successful submission
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          comentario: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="contact-container">
      <div className="full-width">
        <Header />
        <Nav countItem={countItem} />
      </div>
      
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.</p>
      </div>
      
      <div className="contact-content">
        {/* Columna del Formulario */}
        <div className="form-column">
          {submitSuccess ? (
            <div className="success-message">
              <svg viewBox="0 0 24 24" className="success-icon">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
              <h2>¡Gracias por contactarnos!</h2>
              <p>Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="back-button"
              >
                Enviar otro mensaje
              </button>
            </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className={`form-group ${errors.nombre ? 'has-error' : ''}`}>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className={errors.nombre ? 'error-input' : ''}
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className={`form-group ${errors.telefono ? 'has-error' : ''}`}>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingresa tu teléfono"
              className={errors.telefono ? 'error-input' : ''}
            />
            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu email"
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.comentario ? 'has-error' : ''}`}>
            <label htmlFor="comentario">Comentario o mensaje</label>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              className={errors.comentario ? 'error-input' : ''}
            ></textarea>
            {errors.comentario && <span className="error-message">{errors.comentario}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              'Enviar mensaje'
            )}
          </button>
        </form>
      )}
      </div>

   
        {/* Columna de Información de la Empresa */}
        <div className="info-column">
          <div className="company-info">
            <h2>Información de Contacto</h2>
            <p>Estamos disponibles para responder tus consultas de lunes a viernes de 9:00 a 18:00.</p>
            
            <div className="info-card">
              <svg viewBox="0 0 24 24" className="info-icon">
                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <h3>Nuestra Oficina</h3>
              <p>Calle Falsa 123, Ciudad, País</p>
              <p>Edificio Corporativo, Piso 5</p>
            </div>

            <div className="info-card">
              <svg viewBox="0 0 24 24" className="info-icon">
                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              <h3>Teléfonos</h3>
              <p>Ventas: +1 234 567 890</p>
              <p>Soporte: +1 234 567 891</p>
            </div>

            <div className="info-card">
              <svg viewBox="0 0 24 24" className="info-icon">
                <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
              </svg>
              <h3>Correos Electrónicos</h3>
              <p>General: contacto@empresa.com</p>
              <p>Soporte: soporte@empresa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm