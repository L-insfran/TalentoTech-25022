import { FaExclamationTriangle } from 'react-icons/fa'; // Importa un ícono de FontAwesome
import ProductList from './ProductList';

const Main = ({ products, addToCart }) => {
  return (
    <main className='main'>
      <h1 style={{ textAlign: "center", marginTop: "4px" }}>Nuestros Productos En La Tienda</h1>
      {products && products.length > 0 ? (
        <ProductList products={products} addToCart={addToCart} />
      ) : (
        <div style={{
          textAlign: "center",
          padding: "30px",
          fontSize: "20px",
          backgroundColor: "#fff8e1",
          borderLeft: "5px solid #ffc107",
          borderRadius: "4px",
          margin: "20px auto",
          maxWidth: "500px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          animation: "pulse 2s infinite"
        }}>
          <FaExclamationTriangle style={{ color: "#ff9800", fontSize: "28px" }} />
          <div>
            <strong style={{ color: "#e65100" }}>¡Ups!</strong>
            <p style={{ margin: "8px 0 0", color: "#555" }}>No se encontraron productos disponibles</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default Main;