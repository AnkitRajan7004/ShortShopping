import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="block bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-gray-800 cursor-pointer"
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-base font-semibold truncate" title={name}>
          {name}
        </p>
        <p className="text-yellow-700 font-bold mt-1 text-lg">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
