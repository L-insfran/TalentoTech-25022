import Footer from '../components/Footer';
import Nav from '../components/Navbar';


const Acercade = ( ) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header y Navbar */}
      <header className="w-full bg-white shadow-sm">
        <Nav />
      </header>

      {/* Contenido principal */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Sección superior con título y badge */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold">
                ¡Hola, soy Leandro! <span className="inline-block animate-waving">👋</span>
              </h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Talento Tech - Comisión 25022
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Introducción */}
            <section className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Soy un apasionado estudiante de tecnología en constante búsqueda de nuevos conocimientos 
                que me permitan crecer tanto personal como profesionalmente. Mi viaje en el mundo IT está 
                impulsado por la curiosidad y el deseo de innovar.
              </p>
            </section>

            {/* Filosofía */}
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mi Filosofía</h2>
              <p className="text-gray-700">
                En un entorno tecnológico que evoluciona aceleradamente, considero fundamental mantenerme 
                actualizado. Por eso invierto tiempo en formarme continuamente en desarrollo de software, 
                herramientas digitales y metodologías ágiles.
              </p>
            </section>

            {/* Objetivos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mis Objetivos</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-0.5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Adquirir habilidades sólidas para equipos de trabajo eficientes</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-0.5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Adaptarme a los cambios del mercado laboral tecnológico</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-0.5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Contribuir con soluciones innovadoras a desafíos actuales</span>
                </li>
              </ul>
            </section>

            {/* Cierre */}
            <section className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Además de mi formación académica, busco participar en proyectos colaborativos y prácticas 
                profesionales donde pueda aplicar lo aprendido, potenciar mis capacidades y ampliar mi red 
                de contactos en el sector IT.
              </p>
            </section>

            {/* Botón de contacto */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-lg font-medium text-gray-700">
                ¿Quieres conectar o saber más sobre mi trabajo?
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 transform hover:-translate-y-1">
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Acercade;