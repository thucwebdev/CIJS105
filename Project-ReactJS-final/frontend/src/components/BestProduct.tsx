
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { products } from '../assets/assets'
import p_imgTime from '../assets/img_time.jpeg'


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

const BestProduct = () => {
  const bestProducts = products.filter((product: ProductType) => product.bestseller);

  const addToCart = (product: ProductType, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  const [timeLeft, setTimeLeft] = useState({
    days: 281,
    hours: 17,
    minutes: 23,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <p className='uppercase text-xs md:text-sm text-gray-500 mb-2 tracking-wider'>
          DON'T MISS SUPER OFFERS
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-gray-300 flex-1 max-w-20 md:max-w-32"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 whitespace-nowrap">
            Our best products
          </h2>
          <div className="h-px bg-gray-300 flex-1 max-w-20 md:max-w-32"></div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
        

        <div className="lg:col-span-2 relative">
          <div 
            className="relative h-64 md:h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${p_imgTime})`,
            }}
          >
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-black p-6 md:p-8">
              
              <div className="flex gap-2 md:gap-4 mb-6 md:mb-8">
                <div className="bg-white bg-opacity-90 text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-medium min-w-[60px] md:min-w-[80px] text-center">
                  <div className="font-bold text-lg md:text-xl">{timeLeft.days}</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-white bg-opacity-90 text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-medium min-w-[60px] md:min-w-[80px] text-center">
                  <div className="font-bold text-lg md:text-xl">{timeLeft.hours}</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-white bg-opacity-90 text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-medium min-w-[60px] md:min-w-[80px] text-center">
                  <div className="font-bold text-lg md:text-xl">{timeLeft.minutes}</div>
                  <div className="text-xs">Mins</div>
                </div>
                <div className="bg-white bg-opacity-90 text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-medium min-w-[60px] md:min-w-[80px] text-center">
                  <div className="font-bold text-lg md:text-xl">{timeLeft.seconds}</div>
                  <div className="text-xs">Secs</div>
                </div>
              </div>

 
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center mb-6 md:mb-8 leading-tight">
                The Classics Make A Comeback
              </h3>

          
              <button className="bg-gray-800 hover:bg-gray-900 hover:cursor-pointer text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors duration-300 tracking-wider">
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Product grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
            {bestProducts.slice(0,2).map((product: ProductType) => (
              <div key={product._id} className="group cursor-pointer block">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex flex-col relative">
                  <div className="aspect-square overflow-hidden relative">
                    <Link to={`/product/${product._id}`}>
                      <img 
                        src={product.image[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    {/* Action Icons - positioned on top right of image */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => addToCart(product, e)}
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
                  <Link to={`/product/${product._id}`} className="p-3 md:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base group-hover:text-gray-600 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-sm md:text-lg font-semibold text-gray-900">
                      {product.price.toLocaleString('vi-VN')} ₫
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">
        {bestProducts.slice(2).map((product: ProductType) => (
          <div key={product._id} className="group cursor-pointer block">
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="aspect-square overflow-hidden relative">
                <Link to={`/product/${product._id}`}>
                  <img 
                    src={product.image[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                {/* Action Icons - positioned on top right of image */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => addToCart(product, e)}
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
              <Link to={`/product/${product._id}`} className="p-4 block">
                <h4 className="font-medium text-gray-800 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {product.price.toLocaleString('vi-VN')} ₫
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestProduct