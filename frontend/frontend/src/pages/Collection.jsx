import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState(products || []);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(a => a !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(a => a !== value));
    } else {
      setSubCategory(prev => [...prev, value]);
    }
  }

  useEffect(() => {
    let productsCopy = products ? products.slice() : [];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // relevant, no sorting
        break;
    }

    setFilterProducts(productsCopy);
  }, [products, category, subCategory, search, showSearch, sortType]);

  return (
    <div
      className='flex flex-col sm:flex-row gap-6 sm:gap-12 pt-12 border-t min-h-screen bg-gradient-to-b from-[#f0f0e8] to-[#e8e6dd] px-4 sm:px-10 md:px-20'
    >
      {/* FILTERS */}
      <aside className='min-w-[18rem] bg-white rounded-lg shadow-md p-6 sticky top-20 self-start'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='mb-5 text-xl flex items-center justify-between sm:justify-start cursor-pointer gap-3 text-yellow-700 font-semibold select-none px-1 sm:px-0 hover:text-yellow-900 transition-colors duration-200'
          aria-expanded={showFilter}
          aria-controls="filter-sections"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setShowFilter(!showFilter);
          }}
        >
          FILTERS
          <img
            className={`h-5 w-5 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt={showFilter ? "Collapse filters" : "Expand filters"}
            aria-hidden="true"
          />
        </p>

        <div
          id="filter-sections"
          className={`${showFilter ? 'block' : 'hidden'} sm:block`}
        >
          {/* Category */}
          <section
            className='border border-yellow-300 rounded-md p-4 mb-8 text-yellow-900'
            aria-label="Category Filter"
          >
            <p className='mb-3 text-sm font-semibold tracking-wide'>CATEGORIES</p>
            <div className='flex flex-col gap-4 text-sm font-light text-yellow-700'>
              {["Men", "Women", "Kids"].map(cat => (
                <label
                  key={cat}
                  htmlFor={`cat-${cat.toLowerCase()}`}
                  className='flex items-center gap-3 cursor-pointer select-none hover:text-yellow-900 transition-colors duration-150'
                >
                  <input
                    id={`cat-${cat.toLowerCase()}`}
                    className='w-5 h-5 accent-yellow-400'
                    value={cat}
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                    type="checkbox"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </section>

          {/* Subcategory */}
          <section
            className='border border-yellow-300 rounded-md p-4 mb-6 text-yellow-900'
            aria-label="Subcategory Filter"
          >
            <p className='mb-3 text-sm font-semibold tracking-wide'>TYPE</p>
            <div className='flex flex-col gap-4 text-sm font-light text-yellow-700'>
              {["Topwear", "Bottomwear", "Winterwear"].map(subCat => (
                <label
                  key={subCat}
                  htmlFor={`subcat-${subCat.toLowerCase()}`}
                  className='flex items-center gap-3 cursor-pointer select-none hover:text-yellow-900 transition-colors duration-150'
                >
                  <input
                    id={`subcat-${subCat.toLowerCase()}`}
                    className='w-5 h-5 accent-yellow-400'
                    value={subCat}
                    onChange={toggleSubCategory}
                    checked={subCategory.includes(subCat)}
                    type="checkbox"
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </section>
        </div>
      </aside>

      {/* PRODUCTS + SORT */}
      <main className='flex-1 px-4 sm:px-0'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-5 px-2 sm:px-0'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 px-4 py-2 text-sm rounded-md bg-white border-yellow-300 text-yellow-800 font-medium shadow-sm hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition'
            aria-label="Sort products"
            value={sortType}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-8'>
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem
                  key={item._id || index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  className="shadow-lg rounded-lg hover:shadow-yellow-300 transition-shadow duration-300 bg-white p-3"
                />
              ))
            ) : (
              <p className="text-center text-yellow-800 font-semibold col-span-full mt-10">No products found.</p>
            )
          }
        </div>
      </main>
    </div>
  )
}

export default Collection;
