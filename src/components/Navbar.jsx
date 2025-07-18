import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

const Nav = () => {
  const { cantidadEnCarrito } = useCartContext();
  const { logout, user } = useAuthContext();

  const navigate = useNavigate();
  const userAutorizado = localStorage.getItem("authToken");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Izquierda */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img
                src="https://imagenes.compragamer.com/assets/logos/newlogo_blanco.svg"
                alt="Logo"
                className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors"
              >
                Acerca de
              </Link>
              <Link
                to="/contacto"
                className="hover:text-gray-300 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Derecha */}
          <div className="flex items-center space-x-6">
            {/* Usuario */}
            <div className="flex items-center space-x-2 text-sm cursor-pointer">
              <FaUser className="text-white" />

              {user === "admin" ? (
                <span
                  onClick={() => navigate("/dashboard")}
                  className="text-blue-400 hover:underline"
                  title="Ir al panel de administración"
                >
                  Admin
                </span>
              ) : user === "emi" ? (
                <span
                onClick={() => navigate("/dashboard")}
                className="text-blue-400 hover:underline"
                title="Ir al panel de administración"
              >Emi
              </span>
              ) : (
                <span className="text-gray-200">{user || "No user"}</span>
              )}
            </div>

            {/* Carrito */}
            <div className="relative">
              <Link to="/carrito" className="flex items-center">
                <div className="relative">
                  <FaShoppingCart className="text-xl hover:text-gray-300 transition-colors" />
                  {cantidadEnCarrito() > 0 && (
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cantidadEnCarrito()}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Login / Logout */}
            {userAutorizado ? (
              <button
                onClick={handleLogout}
                className="border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition-colors"
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link
                to="/login"
                className="border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition-colors"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
