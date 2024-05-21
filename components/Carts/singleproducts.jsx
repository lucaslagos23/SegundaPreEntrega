import { getProduct } from '../../src/MisProductos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Navbar/nav';
import '../../style/singleProducts.css'
import SubNavbar from '../Navbar/SubNavbar';

export default function SingleProd() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(parseInt(prodId));
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [prodId]);

  return (
    <>
    <Nav/>
    <SubNavbar/>
        <div className="singleProducts"> 
        <div className="singleCardProducts">
      <h2 className="singleTitleCard" >{product.name}</h2> 
      <img className="singleImgProduct" src={product.image} alt={product.name} />
      <p className="singleCategoriCard" >Categoria: {product.category}</p>
      <p className="singleDescriptionCard" >{product.description}</p>
      <p className="singlePriceCard">Precio: ${product.price}</p>
      <button className="singleButtonCard" to={``}>Agregar al carrito</button>
        </div>
    </div>
    </>
  );
}
