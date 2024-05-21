import '../../style/ProductCard.css'
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../src/MisProductos';
import ProductCard from '../Carts/ProductCard';
import SubNavbar from "../Navbar/SubNavbar";
import Nav from '../Navbar/nav';

export default function Navbar() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <>
        <Nav/>
            <SubNavbar />
            <div className='cardContainer' >
                    {products.map(product => (
                        <ProductCard
                       key={product.id}
                       prodId={product.id}
                            title={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
        </>
    );
}




