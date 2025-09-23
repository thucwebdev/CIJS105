import React from 'react'
import bannerImg from '../assets/banner.webp'

const Banner = () => {
  return (
    <>  
    <div className="relative bg-gray-100">
      <div className="relative h-[70vh] flex items-center justify-center">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <img 
            src={bannerImg}
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-wide">
            XStore Marseille04 Demo
          </h1>
          <p className="text-lg text-black mb-8 max-w-xl mx-auto leading-relaxed">
            Make yours celebrations even more special this years with beautiful.
          </p>
          <button className="bg-white text-gray-800 px-8 py-3 hover:bg-gray-200 rounded-sm transition-colors duration-300 text-sm tracking-wider uppercase font-medium">
            Go to shop
          </button>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <div className="bg-black text-white text-xs px-3 py-1 mb-2 text-center">
            148+<br />
            Websites
          </div>
          <button className="bg-green-500 text-white px-6 py-3 hover:bg-green-600 transition-colors duration-300 font-medium">
            Buy Now
          </button>
        </div>
      </div>
      </div>
    
      <div className="relative top-[-60px] bg-[#333] text-white py-9 max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="flex items-center space-x-4 justify-center">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Fastest Shipping</h3>
                <p className="text-[#FFFFFFC7] text-sm">Order at $39 order</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">100% Safe Payments</h3>
                <p className="text-[#FFFFFFC7] text-sm">9 month installments</p>
              </div>
            </div>
    
            <div className="flex items-center space-x-4 justify-center">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">14-Days Return</h3>
                <p className="text-[#FFFFFFC7] text-sm">Shop with confidence</p>
              </div>
            </div>
         
            <div className="flex items-center space-x-4 justify-center">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">24/7 Online Support</h3>
                <p className="text-[#FFFFFFC7] text-sm">Delivered to home</p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Banner