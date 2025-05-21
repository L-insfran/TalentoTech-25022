import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';

const Home = ({cart,handleAddToCart}) => {
  const countItem = cart.length
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:3001/productos')
      .then(response => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ display:"grid", minHeight:"100vh", gridTemplateRows:"auto 1fr auto" }}>
      <div>
      <Header/>
      <Nav countItem={countItem}/>
      </div>
      <Main products={productos} addToCart={handleAddToCart} />
      <Footer/>
    </div>
  )
}

export default Home
