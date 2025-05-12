import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './styles/Acercade.css';

const Acercade = ({productos}) => {
  const countItem = productos.length
  return (
    <div className="page-container">
      <div className="full-width">
        <Header />
        <Nav countItem={countItem} />
      </div>
      
      <main className="main-content">
        <div className="about-card">
          <div className="about-header">
            <h2 className="about-title">¡Hola, soy Leandro! 👋</h2>
            <div className="about-badge">Talento Tech - Comisión 25022</div>
          </div>
          
          <div className="about-content">
            <p className="about-text">
              Soy un apasionado estudiante de tecnología en constante búsqueda de nuevos conocimientos 
              que me permitan crecer tanto personal como profesionalmente. Mi viaje en el mundo IT está 
              impulsado por la curiosidad y el deseo de innovar.
            </p>
            
            <div className="about-highlight">
              <h3 className="highlight-title">Mi Filosofía</h3>
              <p>
                En un entorno tecnológico que evoluciona aceleradamente, considero fundamental mantenerme 
                actualizado. Por eso invierto tiempo en formarme continuamente en desarrollo de software, 
                herramientas digitales y metodologías ágiles.
              </p>
            </div>
            
            <div className="about-goals">
              <h3 className="goals-title">Mis Objetivos</h3>
              <ul className="goals-list">
                <li>Adquirir habilidades sólidas para equipos de trabajo eficientes</li>
                <li>Adaptarme a los cambios del mercado laboral tecnológico</li>
                <li>Contribuir con soluciones innovadoras a desafíos actuales</li>
              </ul>
            </div>
            
            <p className="about-closing">
              Además de mi formación académica, busco participar en proyectos colaborativos y prácticas 
              profesionales donde pueda aplicar lo aprendido, potenciar mis capacidades y ampliar mi red 
              de contactos en el sector IT.
            </p>
          </div>
          
          <div className="about-footer">
            <span className="contact-cta">¿Quieres conectar?</span>
            <button className="contact-button">Contáctame</button>
          </div>
        </div>
      </main>
      
      <div className="full-width">
        <Footer />
      </div>
    </div>
  );
};

export default Acercade;
