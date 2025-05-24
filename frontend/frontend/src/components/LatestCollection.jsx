import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-12 bg-gray-50 rounded-lg shadow-md p-8 max-w-7xl mx-auto">
      <div className="text-center text-5xl font-extrabold py-10 text-indigo-900 tracking-wide">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 mx-auto mt-4 text-base text-gray-700">
          Discover our newest arrivals that blend style and comfort, curated just for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 gap-y-10">
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              currency="₹"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
