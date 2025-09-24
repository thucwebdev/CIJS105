import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { products } from '../assets/assets'

type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

export const OurShop = () => {
  const [sortBy, setSortBy] = useState('default');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>(products);

  useEffect(() => {
    let sorted = [...products];
    
    switch (sortBy) {
      case 'price-low':
        sorted = sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted = sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        sorted = sorted.sort((a, b) => b.date - a.date);
        break;
      default:
        // Keep original order
        break;
    }
    
    setSortedProducts(sorted);
  }, [sortBy]);

  const addToCart = (product: ProductType) => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image[0],
      size: product.sizes[0], // Default to first size
      quantity: 1,
      category: product.category,
      subCategory: product.subCategory
    };

    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(
      (item: { id: string; size: string }) => item.id === product._id && item.size === product.sizes[0]
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      cart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count in header
    window.dispatchEvent(new Event('storage'));
    
    // Show success message
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  const displayedProducts = sortedProducts.slice(0, itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Top Bar with Sorting and Show Options */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white"
              >
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Sort by Name</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white"
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedProducts.map((product) => (
              <div key={product._id} className="group cursor-pointer">
                <div className="relative">
                  <Link to={`/product/${product._id}`}>
                    <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  
                  {/* Action Icons - positioned on top right of image */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                      title="Add to cart"
                    >
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Size Options */}
                <div className="flex items-center space-x-1 mb-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {/* Product Info */}
                <Link to={`/product/${product._id}`}>
                  <h3 className="font-medium text-gray-800 mb-2 hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category} {product.subCategory && `• ${product.subCategory}`}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {product.price.toLocaleString('vi-VN')} ₫
                  </p>
                </Link>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {itemsPerPage < products.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setItemsPerPage(prev => Math.min(prev + 8, products.length))}
                className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded"
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
