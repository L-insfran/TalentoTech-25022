const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sección de derechos */}
          <section className="text-center md:text-left">
            <h4 className="text-xl font-serif mb-1">
              &copy; 2025 - Proyecto Final React
            </h4>
            <small className="text-gray-400 text-sm">
              TODOS LOS DERECHOS RESERVADOS
            </small>
          </section>

          {/* Sección de información del desarrollador */}
          <section className="text-center md:text-right">
            <div className="space-y-1">
              <h4 className="font-serif">
                Desarrollado por: <span className="text-gray-300">Leandro Insfrán</span>
              </h4>
              <h4 className="font-serif">
                Comisión: <span className="text-gray-300">25022</span>
              </h4>
              <h4 className="font-serif">
                Email: <span className="text-gray-300 hover:text-blue-400 transition-colors">
                  <a href="mailto:leandro.insfran@devops.com">leandro.insfran@devops.com</a>
                </span>
              </h4>
            </div>
          </section>
        </div>

        {/* Separador opcional */}
        {/* <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Made with ❤️ using React and Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;