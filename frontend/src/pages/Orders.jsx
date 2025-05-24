import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 bg-[#faf8f2] min-h-screen px-4 sm:px-10 md:px-20">
      <div className="text-3xl mb-8 text-[#4b462e]">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="flex flex-col gap-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-5 px-6 border rounded-md border-[#d3c88f] bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-6 text-sm sm:text-base text-[#4b462e]">
              <img
                className="w-16 sm:w-20 rounded-md border border-[#d3c88f] mr-4"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center gap-6 mt-2 text-[#756f45]">
                  <p className="text-lg font-semibold">
                    {currency}{item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: L</p>
                </div>
                <p className="mt-2 text-[#9e9873] text-sm">
                  Date: <span className="text-gray-400">25, May, 2024</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:ml-6">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[#7a732f] font-medium">Ready to ship</p>
              </div>
              <button
                className="border border-[#b7a960] text-[#7a732f] font-semibold px-5 py-2 rounded-md hover:bg-[#b7a960] hover:text-white transition-colors duration-300"
                onClick={() => alert(`Tracking order for ${item.name}`)}
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
