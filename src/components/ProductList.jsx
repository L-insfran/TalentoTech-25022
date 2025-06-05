
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import Product from './Product';


const ProductList = () => {

  const { productos, loading } = useCartContext();
  const [search, setSearch] = useState('');
  
  const filteredProducts = productos?.filter(product => product.nombre?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="text-center text-gray-500 mb-6">Cargando productos...</div>
      )}
      {!loading && productos.length === 0 && (
        <div className="text-center text-gray-500 mb-6">No hay productos disponibles.</div>
      )}
       {!loading && productos.length > 0 && (
        <input 
          type="text"
          placeholder="Buscar productos..."
          className="mb-4 p-2 border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Product 
            key={product.id} 
            product={product}
            className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;