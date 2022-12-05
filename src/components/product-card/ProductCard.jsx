/* eslint-disable no-undef */
import './styles.css';
import { useState, useEffect } from 'react';
import Timer from '../chronometer/Timer';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="products__elements">
          <img src={product.image} alt="imgs" />
          <h2>{product.title}</h2>
          <Timer product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
