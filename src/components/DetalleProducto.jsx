import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { productos, agregarCarrito } = useCartContext();

  const producto = productos.find((prod) => prod.id === id);

  if (!producto) {
    return <p className="text-center text-gray-500 mt-10">Producto no encontrado</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline text-sm"
      >
        ← Volver
      </button>

      {/* Detalle del producto */}
      <div className="bg-white rounded-lg shadow-md flex flex-col sm:flex-row overflow-hidden">
        {/* Imagen */}
        <div className="sm:w-1/2 bg-gray-100 flex items-center justify-center p-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>

        {/* Info */}
        <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
            <p className="text-gray-600 mb-4">{producto.detalle}</p>
            <p className="text-xl font-semibold text-blue-600 mb-2">${producto.precio.toFixed(2)}</p>
            <p className={`text-sm font-medium ${producto.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {producto.stock > 0 ? `En stock: ${producto.stock} unidades` : 'Sin stock'}
            </p>
          </div>

          {/* Botón agregar al carrito */}
          {producto.stock > 0 && (
            <button
              onClick={() => agregarCarrito(producto,1)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
