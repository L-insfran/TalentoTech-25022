import "./style/Carrito.css";

const Carrito = ({ productos, onEliminarProducto, onVaciarCarrito, onActualizarCantidad, onSeguirComprando }) => {
  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  return (
    <div className="carrito-container">
      <div className="carrito">
        <h2 className="carrito-titulo">🛒 Tu Carrito de Compras</h2>
        
        {productos.length === 0 ? (
          <div className="carrito-vacio">
            <div className="carrito-vacio-icono">🛒</div>
            <h3>Tu carrito está vacío</h3>
            <p>Agrega algunos productos para comenzar</p>
            <button 
                  onClick={onSeguirComprando}
                  className="btn-seguir"
                  style={{marginTop: '10px'}}
                  aria-label="Seguir comprando"
                >
                 ←Comenzar a comprar
                </button>
          </div>
        ) : (
          <>
            <ul className="lista-productos">
              {productos.map((producto, index) => (
                <li key={producto.id} className={`producto-carrito ${index % 2 === 0 ? 'par' : 'impar'}`}>
                  <div className="producto-imagen">
                    {producto.imagen ? (
                      <img src={producto.imagen} alt={producto.nombre} />
                    ) : (
                      <div className="producto-imagen-placeholder">📦</div>
                    )}
                  </div>
                  <div className="info-producto">
                    <h4 className="producto-nombre">{producto.nombre}</h4>
                    <div className="producto-detalle">
                      <span className="producto-precio">${producto.precio.toFixed(2)} c/u</span>
                      <div className="producto-cantidad">
                        <button 
                          onClick={() => onActualizarCantidad(producto.id, producto.cantidad - 1)}
                          disabled={producto.cantidad <= 1}
                        >
                          -
                        </button>
                        <span>{producto.cantidad}</span>
                        <button 
                          onClick={() => onActualizarCantidad(producto.id, producto.cantidad + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="producto-subtotal">Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => onEliminarProducto(producto.id)}
                    className="btn-eliminar"
                    aria-label="Eliminar producto"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="resumen-carrito">
              <div className="resumen-total">
                <span>Total:</span>
                <span className="total-precio">${calcularTotal().toFixed(2)}</span>
              </div>
              <div className="resumen-acciones">
                <button 
                  onClick={onVaciarCarrito}
                  className="btn-vaciar"
                >
                  Vaciar Carrito
                </button>

                <button className="btn-comprar">
                  Finalizar Compra →
                </button>
                <button 
                  onClick={onSeguirComprando}
                  className="btn-seguir"
                >
                  ← Seguir Comprando
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;