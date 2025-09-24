import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { hamburger } from '../assets/assets'

const Header = () => {
  const [currentUser, setCurrentUser] = useState<{id: number, name: string, email: string} | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)


  useEffect(() => {
   
    const userFromStorage = localStorage.getItem('user')
    if (userFromStorage) {
      try {
        const user = JSON.parse(userFromStorage)
        setCurrentUser(user)
      } catch (error) {
        console.error('Error parsing user from localStorage:', error)
        localStorage.removeItem('user')
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setCurrentUser(null)
    alert('Logged out successfully!')
    window.location.reload() 
  }

  const updateCartCount = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      const totalItems = cartItems.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
      setCartCount(totalItems);
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {

    updateCartCount();


    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <header className="bg-[rgb(233,226,222)] py-4 px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">fb</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">Ins</span>
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">Yt</span>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors text-sm">
              Home
            </Link>
            <Link to="/our-shop" className="text-gray-700 hover:text-black transition-colors text-sm">
              Our Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors text-sm">
              About us
            </Link>
          </nav>
        </div>

        {/* Mobile hamburger menu */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-200 rounded"
          >
            <img src={hamburger} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        <Link to="/">
          <div className="flex-1 flex justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-wider text-black">
              Marseille
            </h1>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Xstore Theme
            </p>
          </div>
        </div>
        </Link>
      
        <div className="flex items-center space-x-6">

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/contact" className="text-gray-700 hover:text-black transition-colors text-sm">
              Contacts
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-black transition-colors text-sm">
              Search
            </Link>
          </div>
          
          {/* User Authentication Section */}
          {currentUser ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1 bg-[rgb(233, 226, 222)] rounded-lg">
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-700 hover:text-black hover:cursor-pointer transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin" className="text-gray-700 hover:text-black transition-colors text-sm">
              Sign in
            </Link>
          )}
  
          <div className="flex items-center space-x-3">
        
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/comments">
                <button className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              </Link>
              

              <Link to="/wishlist">
              <button className="p-1 hover:bg-gray-200 hover:cursor-pointer rounded">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              </Link>
              
            </div>

    
            <Link to="/cart" className="p-1 hover:bg-gray-200 rounded relative block">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgb(233,226,222)] border-t border-gray-300 shadow-lg z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <Link 
              to="/element" 
              className="block text-gray-700 hover:text-black transition-colors text-sm py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Elements
            </Link>
            <Link 
              to="/our-shop" 
              className="block text-gray-700 hover:text-black transition-colors text-sm py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Shop
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-black transition-colors text-sm py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-black transition-colors text-sm py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-black transition-colors text-sm py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header