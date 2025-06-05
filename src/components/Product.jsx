import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { agregarCarrito } = useCartContext();


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Contenedor de la imagen */}
      <div className="relative pt-[70%] bg-gray-50">
        <img 
          src={product.imagen} 
          alt={product.nombre}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>

      {/* Contenido del producto */}
      <div className="p-4">
        {/* Nombre del producto */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">
          {product.nombre}
        </h3>
        
        {/* Detalle del producto */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.detalle}
        </p>
        
        {/* Precio y stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg text-blue-600">
            ${product.precio.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.stock} disponibles
          </span>
        </div>
        <div className="text-center text-gray-500 mb-6"><Link to={`/productos/${product.id}`}>Ver más...</Link></div>
        {/* Botón de agregar */}
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-200 font-medium"
          onClick={() => agregarCarrito(product, 1)}

        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;