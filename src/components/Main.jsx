import ProductList from './ProductList'
const Main = ({products, addToCart}) => {
  
  return (
    <main className='main'>
        <h1 style={{textAlign:"center", marginTop:"4px"}}>Nuestos Productos En La Tienda</h1>
         <ProductList products={products} addToCart={addToCart} />
    </main>
  )
}

export default Main
