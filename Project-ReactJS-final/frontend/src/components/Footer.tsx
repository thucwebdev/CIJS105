import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-wider text-white mb-2">
            Marseille
          </h2>
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            XSTORE THEME
          </p>
        </div>

        <nav className="flex justify-center items-center mb-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Elements
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Shop
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Contact Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Compare
            </a>
          </div>
        </nav>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-sm mb-4">
            Guaranteed safe checkout
          </p>

          <div className="flex justify-center items-center space-x-3">
            <div className="bg-gray-700 px-3 py-2 rounded border border-gray-600">
              <span className="text-xs font-mono text-gray-300">AMEX</span>
            </div>
   
            <div className="bg-gray-700 px-3 py-2 rounded border border-gray-600">
              <span className="text-xs font-mono text-gray-300">DISC</span>
            </div>
   
            <div className="bg-gray-700 px-3 py-2 rounded border border-gray-600">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80 -ml-1"></div>
              </div>
            </div>
     
            <div className="bg-gray-700 px-3 py-2 rounded border border-gray-600">
              <span className="text-xs font-mono text-blue-400">PayPal</span>
            </div>
     
            <div className="bg-gray-700 px-3 py-2 rounded border border-gray-600">
              <span className="text-xs font-mono text-gray-300">VISA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-500">
            Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer