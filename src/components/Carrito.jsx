import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Carrito = () => {
  const { 
    carrito,
    CalcularTotal,
    VaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCarrito
  } = useCartContext();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <span className="text-2xl">🛒</span> Tu Carrito de Compras
        </h2>
        
        {carrito.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500 mb-6">Agrega algunos productos para comenzar</p>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 mx-auto"
            >
              <span>←</span> Comenzar a comprar
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Lista de productos */}
            <ul className="space-y-4">
              {carrito.map((producto) => (
                <li key={producto.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex items-stretch">
                  {/* Imagen del producto */}
                  <div className="w-24 sm:w-32 flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    {producto.imagen ? (
                      <img 
                        src={producto.imagen} 
                        alt={producto.nombre} 
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="text-4xl text-gray-400 p-4">📦</div>
                    )}
                  </div>
                  
                  {/* Info del producto */}
                  <div className="flex-grow p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800 text-lg">{producto.nombre}</h4>
                      <p className="text-blue-600 font-semibold">${producto.precio.toFixed(2)} c/u</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      {/* Selector de cantidad */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => disminuirCantidad(producto.id)}
                          disabled={producto.cantidad <= 1}
                          className={`px-3 py-1 ${producto.cantidad <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x border-gray-300">{producto.cantidad}</span>
                        <button 
                          onClick={() => aumentarCantidad(producto.id)}
                          className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <p className="font-semibold">Subtotal: <span className="text-blue-600">${(producto.precio * producto.cantidad).toFixed(2)}</span></p>
                    </div>
                  </div>
                  
                  {/* Botón eliminar */}
                  <button 
                    onClick={() => eliminarCarrito(producto.id)}
                    className="flex-shrink-0 w-10 flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                    aria-label="Eliminar producto"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Resumen del carrito */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Total:</span>
                <span className="text-2xl font-bold text-blue-600">${CalcularTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={VaciarCarrito}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors flex-grow"
                >
                  Vaciar Carrito
                </button>
                
                <button 
                  onClick={() => navigate('/')}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex-grow"
                >
                  ← Seguir Comprando
                </button>
                
                <button 
                  onClick={() => navigate("/finalizaCompra")}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex-grow"
                >
                  Finalizar Compra →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;