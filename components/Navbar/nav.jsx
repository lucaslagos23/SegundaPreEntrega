import { Link } from 'react-router-dom';
import '../../style/nav.css'
import CarritoCompras from "../Navbar/CarritoCompras";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Nav(){ 
    return( 

        
        <nav className="barraDeNavegacion">
        <Link to="/" className="logo">GamerClub</Link>
        <div className="navigation-links">
            <div className="search-box">
                <input className="barraDeBusqueda" type="text" placeholder="Eso que querés.. buscalo acá" />
                <span className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>
            <Link to="/contact" className="login-link">Contacto</Link>
        </div>
        <CarritoCompras />
    </nav>
    )
}
