import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Cart = () => {
  const { products, currency, navigate, cartItems, updateQuantity, clearCart } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  // Discount states
  const [discountCode, setDiscountCode] = useState('')
  const [discountError, setDiscountError] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)

  useEffect(() => {
    const tempData = []
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size]
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity,
          })
        }
      }
    }
    setCartData(tempData)
    setDiscountApplied(false)
    setDiscountAmount(0)
    setDiscountCode('')
    setDiscountError('')
  }, [cartItems])

  const subtotal = cartData.reduce((acc, item) => {
    const productData = products.find(p => p._id === item._id)
    return productData ? acc + productData.price * item.quantity : acc
  }, 0)

  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0)

  const changeQuantity = (id, size, amount) => {
    const item = cartData.find(i => i._id === id && i.size === size)
    if (!item) return
    const newQty = item.quantity + amount
    if (newQty < 1) return
    updateQuantity(id, size, newQty)
  }

  const applyDiscount = () => {
    if (discountCode.trim().toLowerCase() === 'save10') {
      const discountVal = subtotal * 0.10
      setDiscountAmount(discountVal)
      setDiscountApplied(true)
      setDiscountError('')
    } else {
      setDiscountError('Invalid discount code')
      setDiscountApplied(false)
      setDiscountAmount(0)
    }
  }

  const totalAfterDiscount = subtotal - discountAmount

  return (
    <div className="border-t pt-14 px-4 sm:px-8 max-w-7xl mx-auto bg-[#F5F3E7] min-h-screen">
      {/* Heading */}
      <div className="text-3xl mb-8 text-center text-[#4B4A3F] font-semibold tracking-wide">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center mt-20 text-[#999978]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mb-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#BFB68B"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
          </svg>
          <p className="text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Cart Items List */}
          <div className="flex-1 space-y-6">
            {/* Sticky Header */}
            <div className="flex justify-between items-center mb-4 px-4 sticky top-0 bg-[#F5F3E7] z-10 border-b border-[#CFC9B8] py-4">
              <p className="text-[#666650] font-semibold">Total Items: {totalQuantity}</p>
              <button
                onClick={clearCart}
                className="text-[#B56E00] hover:underline text-sm font-semibold"
                aria-label="Clear cart"
              >
                Clear Cart
              </button>
            </div>

            {/* Cart Items */}
            {cartData.map((item, index) => {
              const productData = products.find(product => product._id === item._id)
              if (!productData) return null

              const subtotalItem = productData.price * item.quantity

              return (
                <div
                  key={index}
                  className="py-5 border-y border-[#CFC9B8] text-[#4B4A3F] grid grid-cols-[4fr_2fr_1fr_0.5fr] items-center gap-6 hover:shadow-lg rounded-md transition-shadow duration-300 bg-white"
                >
                  {/* Product Info */}
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20 rounded-md object-cover border border-[#BFB68B]"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-semibold">{productData.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-[#7A7551]">
                        <p>
                          {currency}
                          {productData.price.toFixed(2)}
                        </p>
                        <p className="px-3 py-1 border border-[#CFC9B8] bg-[#F2F0E5] rounded-md">{item.size}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => changeQuantity(item._id, item.size, -1)}
                      className={`bg-[#E7E4CE] px-4 py-1 rounded-md hover:bg-[#D9D5B7] transition ${
                        item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-label="Decrease quantity"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => {
                        const val = e.target.value
                        if (val === '' || val === '0') return
                        updateQuantity(item._id, item.size, Number(val))
                      }}
                      className="border border-[#CFC9B8] max-w-[50px] px-2 py-1 text-center rounded-md text-[#666650]"
                    />
                    <button
                      onClick={() => changeQuantity(item._id, item.size, +1)}
                      className="bg-[#E7E4CE] px-4 py-1 rounded-md hover:bg-[#D9D5B7] transition"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-right font-semibold text-[#4B4A3F]">
                    {currency}
                    {subtotalItem.toFixed(2)}
                  </p>

                  {/* Remove Item */}
                  <img
                    src={assets.bin_icon}
                    alt="Remove item"
                    className="w-5 cursor-pointer hover:opacity-70 transition"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    title="Remove item"
                  />
                </div>
              )
            })}
          </div>

          {/* Right: Cart Total, Discount & Checkout */}
          <div className="w-full max-w-md lg:sticky lg:top-20 self-start border border-[#CFC9B8] p-6 rounded-md shadow-md bg-white">

            {/* Discount Code */}
            <div className="mb-6">
              <label htmlFor="discount" className="block font-semibold mb-2 text-[#4B4A3F]">
                Discount Code
              </label>
              <div className="flex gap-3">
                <input
                  id="discount"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter discount code"
                  className="border border-[#CFC9B8] p-2 rounded-md text-[#666650] flex-grow focus:outline-yellow-500"
                  disabled={discountApplied}
                />
                <button
                  onClick={applyDiscount}
                  disabled={discountApplied || !discountCode.trim()}
                  className={`px-5 py-2 rounded-md text-white font-semibold ${
                    discountApplied || !discountCode.trim()
                      ? 'bg-[#BEBCA6] cursor-not-allowed'
                      : 'bg-[#B56E00] hover:bg-[#9A5800]'
                  } transition`}
                >
                  Apply
                </button>
              </div>
              {discountError && <p className="text-red-600 mt-1 text-sm">{discountError}</p>}
              {discountApplied && (
                <p className="text-green-700 mt-1 text-sm font-semibold">Discount applied: {currency}{discountAmount.toFixed(2)}</p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="mb-6 space-y-3 text-[#4B4A3F] font-medium">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>
                  {currency}
                  {subtotal.toFixed(2)}
                </span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-green-700 font-semibold">
                  <span>Discount:</span>
                  <span>- {currency}{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-xl border-t border-[#CFC9B8] pt-3">
                <span>Total:</span>
                <span>
                  {currency}
                  {totalAfterDiscount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => navigate('/place-order')}
              className="bg-[#B56E00] text-white text-sm w-full px-6 py-3 hover:bg-[#9A5800] transition-colors rounded-md font-semibold"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
