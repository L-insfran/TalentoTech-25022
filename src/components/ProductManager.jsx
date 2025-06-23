import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3001/productos';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProductNombre, setNewProductNombre] = useState('');
  const [newProductPrecio, setNewProductPrecio] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // Obtener productos
  const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    setProducts(response.data);
  };

  // Crear producto
  const addProduct = async () => {
    const response = await axios.post(API_URL, {
      nombre: newProductNombre,
      precio: parseFloat(newProductPrecio),
      detalle: '', // Puedes agregar un input para detalle si lo deseas
      stock: 0, // Puedes agregar un input para stock si lo deseas
      imagen: '', // Puedes agregar un input para imagen si lo deseas
    });
    setProducts([...products, response.data]);
    setNewProductNombre('');
    setNewProductPrecio('');
  };

  // Editar producto
  const updateProduct = async () => {
    const response = await axios.put(`${API_URL}/${editingProduct.id}`, {
      nombre: editingProduct.nombre,
      precio: parseFloat(editingProduct.precio),
      detalle: editingProduct.detalle || '',
      stock: editingProduct.stock || 0,
      imagen: editingProduct.imagen || '',
    });
    setProducts(products.map(p => (p.id === editingProduct.id ? response.data : p)));
    setEditingProduct(null);
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setProducts(products.filter(p => p.id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestor de Productos</h1>

      <div className="mb-6 bg-white p-4 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">
          {editingProduct ? 'Editar Producto' : 'Agregar Producto'}
        </h2>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="border p-2 rounded flex-1"
            placeholder="Nombre del producto"
            value={editingProduct ? editingProduct.nombre : newProductNombre}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, nombre: e.target.value })
                : setNewProductNombre(e.target.value)
            }
          />
          <input
            className="border p-2 rounded w-32"
            type="number"
            placeholder="Precio"
            value={editingProduct ? editingProduct.precio : newProductPrecio}
            onChange={(e) =>
              editingProduct
                ? setEditingProduct({ ...editingProduct, precio: e.target.value })
                : setNewProductPrecio(e.target.value)
            }
          />
          <button
            onClick={editingProduct ? updateProduct : addProduct}
            className={`px-4 py-2 rounded text-white ${
              editingProduct ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            {editingProduct ? 'Guardar' : 'Agregar'}
          </button>
          {editingProduct && (
            <button
              onClick={() => setEditingProduct(null)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-lg">{product.nombre}</h3>
            <p className="text-gray-600 text-sm mb-1 line-clamp-2">{product.detalle}</p>
            <p className="text-black font-bold text-md mb-2">${product.precio}</p>

            <div className="mt-auto flex gap-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="flex-1 bg-yellow-500 text-white py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="flex-1 bg-red-600 text-white py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
