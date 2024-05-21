import { Link } from "react-router-dom";
import '../../style/ProductCard.css'
export default function ProductCard({ title, price, image,prodId }) {
  return (
    <div className="productContainer"> 
    <div className="cardProducts">
      <img className="imgProduct" src={image} alt={title} />
      <h2 className="titleCard" >{title}</h2>
      <p className="priceCard">Price: ${price}</p>
       <Link className="buttonCard" to={`/products/${prodId}`}>Ver detalles</Link>
    </div>
    </div>
  );
}








