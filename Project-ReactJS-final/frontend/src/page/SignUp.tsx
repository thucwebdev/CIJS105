import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const checkEmailExists = async (email: string) => {
    try {
      const response = await fetch(`http://localhost:3000/account?email=${email}`)
      const existingAccounts = await response.json()
      return existingAccounts.length > 0
    } catch (error) {
      console.error('Error checking email:', error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {

      const emailExists = await checkEmailExists(formData.email)
      if (emailExists) {
        setErrors({ email: 'Email already exists. Please use a different email.' })
        setLoading(false)
        return
      }

      const newAccount = {
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        createdAt: new Date().toISOString()
      }

      const response = await fetch('http://localhost:3000/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount)
      })

      if (response.ok) {
        const createdAccount = await response.json()
        console.log('Account created successfully:', createdAccount)
   
        alert('Account created successfully! You can now sign in.')
   
        setFormData({
          name: '',
          email: '',
          password: ''
        })
 
        navigate('/signin')
      } else {
        throw new Error('Failed to create account')
      }
    } catch (error) {
      console.error('Error creating account:', error)
      alert('An error occurred while creating your account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Header></Header>
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
            CREATE ACCOUNT
          </h2>
        </div>
 
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-wide">
              REGISTER
            </h3>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm`}
                placeholder=""
                disabled={loading}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
     
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm`}
                placeholder=""
                disabled={loading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
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
                  className={`appearance-none block w-full px-3 py-3 pr-10 border ${
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                  } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm`}
                  placeholder=""
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
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
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
   
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gray-800 hover:bg-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 tracking-wider`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  'CREATE ACCOUNT'
                )}
              </button>
            </div>
          </form>
       
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link 
                to="/signin" 
                className="font-medium text-gray-800 hover:text-gray-900 underline decoration-1 underline-offset-2"
              >
                Sign in here
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
    <Footer></Footer>
    </>
    
  )
}

export default SignUp
