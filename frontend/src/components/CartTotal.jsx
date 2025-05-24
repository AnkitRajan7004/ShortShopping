import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full max-w-md mx-auto bg-yellow-50 rounded-lg shadow-md p-6">
      <div className="text-2xl font-semibold text-yellow-900 mb-4">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className="flex flex-col gap-4 text-yellow-800 text-base">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {getCartAmount().toFixed(2)}</p>
        </div>
        <hr className="border-yellow-200" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee.toFixed(2)}</p>
        </div>
        <hr className="border-yellow-200" />
        <div className="flex justify-between text-yellow-900 font-bold text-lg">
          <p>Total</p>
          <p>{currency} {(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
