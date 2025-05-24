import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(item => category === item.category && subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-20 px-4 sm:px-8 lg:px-20 bg-yellow-50 py-10 rounded-lg shadow-inner border border-yellow-100">
      <div className="text-center text-3xl text-yellow-800 font-bold mb-8">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item, index) => (
          <div key={index} className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
