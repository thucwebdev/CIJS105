
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
              <Link 
                to={`/product/${product._id}`}
                key={product._id} 
                className="group cursor-pointer block"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base group-hover:text-gray-600 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-sm md:text-lg font-semibold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid  gap-6 mt-8">
        {bestProducts.slice(2).map((product: ProductType) => (
          <Link 
            to={`/product/${product._id}`}
            key={product._id} 
            className="group cursor-pointer block"
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-800 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestProduct