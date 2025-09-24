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

type BillingData = {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  apartment: string;
  townCity: string;
  state: string;
  phone: string;
  zipCode: string;
  email: string;
}

export const Checkout = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('check');
  const [billingData, setBillingData] = useState<BillingData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'United States (US)',
    streetAddress: '',
    apartment: '',
    townCity: '',
    state: 'California',
    phone: '',
    zipCode: '',
    email: ''
  });

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleInputChange = (field: keyof BillingData, value: string) => {
    setBillingData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // Here you would typically process the order
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Details - Left Side */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-lg font-medium text-gray-800 mb-6 uppercase tracking-wide">
                Billing Details
              </h2>
              
              <form className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={billingData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={billingData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    value={billingData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Company Name"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country / Region *
                  </label>
                  <select
                    value={billingData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <option value="United States (US)">United States (US)</option>
                    <option value="Vietnam (VN)">Vietnam (VN)</option>
                    <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                  </select>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street address *
                  </label>
                  <input
                    type="text"
                    value={billingData.streetAddress}
                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 mb-3"
                    placeholder="House number and street name"
                    required
                  />
                  <input
                    type="text"
                    value={billingData.apartment}
                    onChange={(e) => handleInputChange('apartment', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>

                {/* Town / City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Town / City *
                  </label>
                  <input
                    type="text"
                    value={billingData.townCity}
                    onChange={(e) => handleInputChange('townCity', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    value={billingData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <option value="California">California</option>
                    <option value="New York">New York</option>
                    <option value="Texas">Texas</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Hanoi">Hanoi</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={billingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Phone"
                    required
                  />
                </div>

                {/* ZIP Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    value={billingData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={billingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Your Order - Right Side */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-gray-200">
              <h2 className="text-lg font-medium text-gray-800 mb-6 uppercase tracking-wide">
                Your Order
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.size}-${index}`} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span className="mr-2">× {item.quantity}</span>
                        <span>Size: {item.size}</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        × {item.price.toLocaleString('vi-VN')} ₫
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {(item.price * item.quantity).toLocaleString('vi-VN')} ₫
                      </p>
                      <Link 
                        to="/cart"
                        className="text-xs text-gray-500 hover:text-gray-700 underline"
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No items in cart</p>
                    <Link to="/" className="text-gray-800 hover:underline">
                      Continue Shopping
                    </Link>
                  </div>
                )}
              </div>

              {/* Subtotal and Total */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{getSubtotal().toLocaleString('vi-VN')} ₫</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-3">
                  <span>TOTAL</span>
                  <span>{getSubtotal().toLocaleString('vi-VN')} ₫</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <input
                    id="check-payments"
                    type="radio"
                    value="check"
                    checked={paymentMethod === 'check'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-gray-800 border-gray-300 focus:ring-gray-800"
                  />
                  <label htmlFor="check-payments" className="ml-3 text-sm text-gray-700">
                    Check payments
                  </label>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </p>

                <div className="flex items-center">
                  <input
                    id="cash-delivery"
                    type="radio"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-gray-800 border-gray-300 focus:ring-gray-800"
                  />
                  <label htmlFor="cash-delivery" className="ml-3 text-sm text-gray-700">
                    Cash on delivery
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-gray-800 text-white py-4 mt-8 rounded hover:bg-gray-700 transition-colors font-medium uppercase tracking-wide"
              >
                Place Order
              </button>

              {/* Safe Checkout Icons */}
              <div className="mt-6">
                <p className="text-center text-xs text-gray-500 mb-3 uppercase tracking-wider">
                  Guaranteed Safe Checkout
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    PP
                  </div>
                  <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                    AE
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    ME
                  </div>
                  <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    BC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
