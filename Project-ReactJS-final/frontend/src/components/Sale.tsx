import { images } from '../assets/assets'

const Sale = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={images[0]}
              alt="Sale Product 1" 
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Center Content */}
          <div className="text-center px-8">
            <h2 className="text-5xl xl:text-6xl font-light text-gray-800 mb-6 tracking-wide">
              Sale Of The Year
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
            </p>
            <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium">
              Read more
            </button>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={images[1]}
              alt="Sale Product 2" 
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* First Image */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <img 
              src={images[0]}
              alt="Sale Product 1" 
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Content */}
          <div className="text-center mb-8 px-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wide">
              Sale Of The Year
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
            </p>
            <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium">
              Read more
            </button>
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={images[1]}
              alt="Sale Product 2" 
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Sale
