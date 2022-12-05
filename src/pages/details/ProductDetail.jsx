import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((datasParameter) => {
        datasParameter.json().then((par) => {
          setData(par);
        });
      });
  }, []);
  return (
    <div className="conta1">
      <section key={data.id}>
        <div>Product: {data.title}</div>
        <div>Price: {data.price}</div>
        <div> Product description: {data.description}</div>
        <div>Category {data.category}</div>
        <div><img src={data.image} alt="" /></div>
      </section>
    </div>
  );
};

export default ProductDetail;
