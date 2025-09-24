import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Notfound = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
 
      navigate(`/our-shop?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-white px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          

          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] font-black text-gray-900 leading-none tracking-tighter">
              404
            </h1>
          </div>


          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-light text-gray-700 uppercase tracking-wider mb-4">
              THAT PAGE CAN'T BE FOUND
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              It looks like nothing was found at this location. Try searching.
            </p>
          </div>


          <div className="mb-12">
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-6 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 pr-14"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>
            </form>
          </div>


          <div className="space-y-4">
            <div>
              <Link 
                to="/"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors font-medium tracking-wide"
              >
                Go to Homepage
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                to="/our-shop" 
                className="text-gray-600 hover:text-gray-800 transition-colors border-b border-transparent hover:border-gray-800"
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-800 transition-colors border-b border-transparent hover:border-gray-800"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-gray-800 transition-colors border-b border-transparent hover:border-gray-800"
              >
                Contact
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Notfound