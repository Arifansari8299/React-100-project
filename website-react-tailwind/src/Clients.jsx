import React from 'react'

const Clients = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What My Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here’s what some of my clients have shared about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial Card 1 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img src="about.png" alt="Client" className="w-28 h-28 mx-auto rounded-full mb-5 border-4 border-purple-200" />
            <h3 className="text-2xl font-semibold text-gray-900">Dr Irfan</h3>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Working with Arif was an absolute pleasure. He delivers high-quality code, communicates clearly, and meets deadlines like a pro!
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img src="about.png" alt="Client" className="w-28 h-28 mx-auto rounded-full mb-5 border-4 border-purple-200" />
            <h3 className="text-2xl font-semibold text-gray-900">Ashwin Reddy</h3>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              His attention to detail and deep knowledge of frontend development truly impressed us. Highly recommended for any web project.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
