
import './style/Product.css'

const Product = ({product, addToCart}) => {
  return (
    <div className="product-card" key={product.id} style={{ marginBottom: '20px' }}>
      <img src={product.imagen} alt={product.nombre} width="150" />
      <span className="product-name">{product.nombre}</span>
      <span className="product-name">{product.detalle}</span>
      <span className="product-price">${product.precio}</span>
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(product)}
      >
        Agregar
      </button>
    </div>
  )
}

export default Product