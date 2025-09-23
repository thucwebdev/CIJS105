import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`http://localhost:3000/account?email=${formData.email}&password=${formData.password}`)
      const accounts = await response.json()

      if (accounts.length > 0) {
        const user = accounts[0]
        console.log('Login successful:', user)
    
        localStorage.setItem('user', JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email
        }))
      
        alert('Login successful!')
   
        navigate('/')
      } else {
        setErrors({ 
          email: 'Invalid email or password',
          password: 'Invalid email or password'
        })
      }
    } catch (error) {
      console.error('Error during login:', error)
      alert('An error occurred while signing in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-normal text-gray-900 tracking-wider">
            MY ACCOUNT
          </h2>
        </div>

       
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-wide">
              LOGIN
            </h3>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
        
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                placeholder=""
              />
            </div>
          
            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-3 pr-10 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                  placeholder=""
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg 
                    className="h-5 w-5 text-gray-400 hover:text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L5.636 5.636m14.142 14.142L4.222 4.222" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
     
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-300"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-gray-900 underline decoration-1 underline-offset-2"
                >
                  Lost your password?
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 tracking-wider"
              >
                LOG IN
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="font-medium text-gray-800 hover:text-gray-900 underline decoration-1 underline-offset-2"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="text-sm text-gray-600 hover:text-gray-900 underline decoration-1 underline-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn