import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  category: string;
  subCategory: string;
}

export const CartOrder = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        setCartItems(JSON.parse(cart));
      }
    };

    loadCart();
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const removeFromCart = (id: string, size: string) => {
    const updatedCart = cartItems.filter(item => !(item.id === id && item.size === size));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  const updateQuantity = (id: string, size: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-light text-gray-800 mb-8">Giỏ hàng của bạn</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Giỏ hàng trống</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} className="flex items-center bg-white p-6 rounded-lg shadow-sm border">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category} • {item.subCategory}</p>
                    <p className="text-sm text-gray-500 mb-2">Size: {item.size}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">Quantity:</span>
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="px-3 py-1 border-x text-center min-w-[3rem]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      {item.price.toLocaleString('vi-VN')} ₫/item
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      {(item.price * item.quantity).toLocaleString('vi-VN')} ₫
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-6">
                <div className="flex justify-between items-center text-xl font-semibold mb-6">
                  <span>Tổng cộng:</span>
                  <span>{getTotalPrice().toLocaleString('vi-VN')} ₫</span>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-700 transition-colors">
                    Đặt hàng
                  </button>
                  <Link 
                    to="/" 
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors text-center"
                  >
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
