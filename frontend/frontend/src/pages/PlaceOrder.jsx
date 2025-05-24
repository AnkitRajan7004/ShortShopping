import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)

  const inputClass =
    'border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-shadow transition-colors duration-200'

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-6 sm:pt-16 min-h-[80vh] border-t bg-gradient-to-b from-[#fff9f1] to-[#fefefe] px-6 sm:px-12 md:px-24'>
      
      {/* Delivery Information Form */}
      <section className='flex flex-col gap-5 w-full sm:max-w-[480px] bg-white rounded-lg shadow-md p-8'>
        <Title text1='DELIVERY' text2='INFORMATION' />
        
        <div className='flex gap-4'>
          <input
            type="text"
            placeholder='First name'
            className={inputClass}
          />
          <input
            type="text"
            placeholder='Last name'
            className={inputClass}
          />
        </div>

        <input
          type="email"
          placeholder='Email address'
          className={inputClass}
        />
        <input
          type="text"
          placeholder='Street'
          className={inputClass}
        />

        <div className='flex gap-4'>
          <input
            type="text"
            placeholder='City'
            className={inputClass}
          />
          <input
            type="text"
            placeholder='State'
            className={inputClass}
          />
        </div>

        <div className='flex gap-4'>
          <input
            type="number"
            placeholder='Zipcode'
            className={inputClass}
          />
          <input
            type="text"
            placeholder='Country'
            className={inputClass}
          />
        </div>

        <input
          type="text"
          placeholder='Phone'
          className={inputClass}
        />
      </section>

      {/* Payment & Cart Total */}
      <section className='w-full sm:max-w-[380px] flex flex-col bg-white rounded-lg shadow-md p-8'>

        {/* Cart Total */}
        <div>
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className='mt-12'>
          <Title text1='PAYMENT' text2='METHOD' />

          <div className='flex flex-col lg:flex-row gap-5 mt-4'>
            {[
              { id: 'stripe', label: '', logo: assets.stripe_logo },
              { id: 'razorpay', label: '', logo: assets.razorpay_logo },
              { id: 'cod', label: 'CASH ON DELIVERY' },
            ].map(({ id, label, logo }) => (
              <div
                key={id}
                onClick={() => setMethod(id)}
                className={`flex items-center gap-4 border rounded-md p-3 cursor-pointer transition 
                  ${method === id ? 'border-yellow-500 bg-yellow-50 shadow-md' : 'border-gray-300 hover:border-yellow-400'}
                `}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setMethod(id)
                }}
                aria-pressed={method === id}
                aria-label={id === 'cod' ? 'Cash on Delivery' : `Pay with ${id.charAt(0).toUpperCase() + id.slice(1)}`}
              >
                <span
                  className={`w-5 h-5 border-2 rounded-full flex-shrink-0
                    ${method === id ? 'bg-yellow-400 border-yellow-400' : 'border-gray-400'}
                  `}
                />
                {logo ? (
                  <img src={logo} alt={`${id} logo`} className='h-6 object-contain' />
                ) : (
                  <p className='text-gray-600 font-medium'>{label}</p>
                )}
              </div>
            ))}
          </div>

          <div className='w-full text-right mt-8'>
            <button
              onClick={() => navigate('/orders')}
              className='bg-yellow-500 hover:bg-yellow-600 text-white px-14 py-3 rounded-md font-semibold transition-shadow shadow-md hover:shadow-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300'
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlaceOrder
