import React, { useState, useEffect } from 'react';
import { getProducts } from '../../src/MisProductos';
import SubNavbar from '../Navbar/SubNavbar';
import Nav from '../Navbar/nav';
import ProductCard from '../Carts/ProductCard'; 

const Auriculares = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data.filter(product => product.category === 'Audio'));
    });
  }, []);

  return (
    <>
      <Nav />
      <SubNavbar />
      <div className='cardContainer'> 
          {products.map(product => (
            <div className='cardProducts'> 
              <ProductCard
                key={product.id}
                prodId={product.id}
                title={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
    </>
  );
};

export default Auriculares;

