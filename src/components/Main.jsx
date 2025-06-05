
import ProductList from "./ProductList";

const Main = () => {


  return (
    <main className="container mx-auto px-4 py-8">
      {/* Título principal */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Nuestros Productos en la Tienda
      </h1>
      <ProductList />
    </main>
  );
};

export default Main;