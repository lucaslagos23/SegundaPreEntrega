import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../style/CarritoCompras.css"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CarritoCompras() {
    return (
        <>
            <div className="carrito-contenedor">
                <a className="carrito-logo" href="#" id="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <span className="cuenta-carrito">0</span>
            </div>
        </>
    );
}