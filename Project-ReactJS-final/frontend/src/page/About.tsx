import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { p_about1, p_about2, p_brand1, p_brand2, p_brand3, p_brand4, p_brand5 } from '../assets/assets'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="text-center py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              WE TRY OUR BEST FOR YOU
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
              Welcome to the Marseille04 Shop
            </h1>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={p_about1} 
                    alt="About us - Manufacturing process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-600 leading-relaxed text-sm">
                  <p>
                    Ac eget cras augue nisl neque lacinia in aliquam. Odio pellentesque sed ultrices 
                    dolor amet nunc habitasse proin consectetur. Ut feugiat egestas eget.
                  </p>
                </div>
              </div>
      
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={p_about2} 
                    alt="About us - Quality materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-600 leading-relaxed text-sm">
                  <p>
                    Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus 
                    at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.
                  </p>
                </div>
              </div>
         
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={p_about1} 
                    alt="About us - Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-600 leading-relaxed text-sm">
                  <p>
                    Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et 
                    convallis consectetur lacus luctus iaculis quisque sed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
   
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              
              <div className="flex items-center justify-center h-16">
                <img 
                  src={p_brand1} 
                  alt="Brand Partner 1"
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center h-16">
                <img 
                  src={p_brand2} 
                  alt="Brand Partner 2"
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center h-16">
                <img 
                  src={p_brand3} 
                  alt="Brand Partner 3"
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center h-16">
                <img 
                  src={p_brand4} 
                  alt="Brand Partner 4"
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center h-16 col-span-2 md:col-span-1">
                <img 
                  src={p_brand5} 
                  alt="Brand Partner 5"
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We are committed to providing high-quality, sustainable fashion that reflects your unique style. 
              Our team works tirelessly to source the finest materials and craft each piece with attention to detail.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our atelier to your wardrobe, every step of our process is designed with care, 
              ensuring that you receive not just clothing, but a piece of art that tells your story.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We use only the finest materials and craftsmanship to ensure every piece meets our high standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Our commitment to the environment drives us to use sustainable practices and eco-friendly materials.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Customer Love</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're here to help you find pieces that make you feel confident.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default About