import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './style/Estilos.css';

const Nav = ({ countItem }) => {
  return (
    <nav style={{ backgroundColor: '#333', color: "white", padding: "10px" }}>
      <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/">
          <img src="https://imagenes.compragamer.com/assets/logos/newlogo_blanco.svg"  style={{ cursor: 'pointer', height: '60px' }} /></Link>
        </li>
        {/* <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link></li> */}
        <li><Link to="/acerca" style={{ color: 'white', textDecoration: 'none' }}>Acerca de</Link></li>
        <li><Link to="/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link></li>
        <li style={{ position: "relative" }}>
          <Link to="/carrito" style={{ color: 'white', textDecoration: 'none' }}>
            <FaShoppingCart style={{ cursor: 'pointer' }} />
            <span className='countCarrito'>{countItem}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
