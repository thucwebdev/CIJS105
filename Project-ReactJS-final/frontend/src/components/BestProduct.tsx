
import { Link } from 'react-router'
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

const BestProduct = () => {
  const bestProducts = products.filter((product: ProductType) => product.bestseller);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className='uppercase text-sm text-[#555] mb-2'>don't miss super offers</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Our best products
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestProducts.map((product: ProductType) => (
          <Link 
            to={`/product/${product._id}`}
            key={product._id} 
            className="group cursor-pointer block"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src={product.image[0]} 
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.category} • {product.subCategory}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {product.price.toLocaleString('vi-VN')} ₫
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestProduct