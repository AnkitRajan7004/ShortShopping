import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("")
  const [image, setImage] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 
      bg-[#f9f7f1] dark:bg-[#3b3a30] text-[#3c3a36] dark:text-[#f7f3e9] min-h-screen'>

      <div className='flex gap-12 sm:gap-16 flex-col sm:flex-row px-6 sm:px-12'>

        {/* -------- Product Images ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-4 sm:flex-row'>

          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full
            scrollbar-thin scrollbar-thumb-yellow-500/60 dark:scrollbar-thumb-yellow-300/80 scrollbar-track-transparent rounded-md'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg border-2 transition-all
                  ${image === item 
                    ? "border-yellow-500 shadow-yellow-400/50 shadow-lg scale-105" 
                    : "border-transparent hover:border-yellow-400 hover:shadow-yellow-300/40 hover:shadow-md"
                  }`}
                src={item}
                alt={`${productData.name} thumbnail ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className='w-full sm:w-[80%] rounded-lg overflow-hidden shadow-lg shadow-yellow-300/40'>
            <img
              className='w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105'
              src={image}
              alt={productData.name}
              loading="lazy"
            />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1 flex flex-col justify-start'>

          <h1 className='font-semibold text-3xl sm:text-4xl mt-2 tracking-wide'>{productData.name}</h1>

          {/* Rating */}
          <div className='flex items-center gap-1 mt-3'>
            {[...Array(4)].map((_, i) => (
              <img key={i} className='w-4' src={assets.star_icon} alt="star" />
            ))}
            <img className='w-4 opacity-50' src={assets.star_dull_icon} alt="star dull" />
            <p className='pl-3 text-sm text-yellow-700 dark:text-yellow-300'>(122 reviews)</p>
          </div>

          {/* Price */}
          <p className='mt-6 text-4xl font-bold tracking-tight text-yellow-600 dark:text-yellow-400'>
            {currency}{productData.price.toFixed(2)}
          </p>

          {/* Description */}
          <p className='mt-6 text-[#5c574d] dark:text-[#d7d4c9] md:w-4/5 leading-relaxed'>{productData.description}</p>

          {/* Sizes */}
          <div className='flex flex-col gap-3 my-8'>
            <p className='font-semibold text-yellow-700 dark:text-yellow-300'>Select Size</p>
            <div className='flex gap-3 flex-wrap'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border rounded-md py-2 px-5 transition-all font-medium
                    ${item === size
                      ? "border-yellow-600 bg-yellow-100 dark:bg-yellow-900 shadow-yellow-400 shadow-md text-yellow-800 dark:text-yellow-300"
                      : "border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/70 text-gray-700 dark:text-gray-200"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            disabled={!size}
            onClick={() => addToCart(productData._id, size)}
            className={`mt-auto bg-yellow-600 text-white font-semibold px-10 py-3 rounded-md shadow-lg transition-colors
              hover:bg-yellow-700 active:bg-yellow-800 disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            ADD TO CART
          </button>

          <hr className='mt-10 sm:w-4/5 border-gray-300 dark:border-gray-700' />

          {/* Info */}
          <div className='text-sm text-yellow-800 dark:text-yellow-300 mt-6 flex flex-col gap-1'>
            <p>✅ 100% Original product.</p>
            <p>✅ Cash on delivery is available on this product.</p>
            <p>✅ Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews Tabs */}
      <div className='mt-24 max-w-5xl mx-auto px-6 sm:px-12'>
        <div className='flex border-b border-yellow-300 dark:border-yellow-600 text-yellow-700 dark:text-yellow-300 font-semibold'>
          <button className='px-6 py-3 border-b-4 border-yellow-600'>Description</button>
          <button className='px-6 py-3 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors'>Reviews (122)</button>
        </div>
        <div className='mt-6 p-6 bg-yellow-50 dark:bg-yellow-900 rounded-md text-yellow-800 dark:text-yellow-300 leading-relaxed text-sm shadow-inner'>
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p className='mt-4'>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product;
