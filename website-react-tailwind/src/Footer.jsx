import React from 'react'
import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-4 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-purple-600 mb-2">Arif Ansari</h2>
        <p className="text-lg font-medium text-gray-600 mb-6">FOLLOW ME</p>

        <div className="flex justify-center gap-6 mb-6">
          <FaFacebook className="w-10 h-10 p-2 bg-white rounded-full shadow hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition duration-300" />
          <FaTwitter className="w-10 h-10 p-2 bg-white rounded-full shadow hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition duration-300" />
          <FaDribbble className="w-10 h-10 p-2 bg-white rounded-full shadow hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition duration-300" />
          <FaInstagram className="w-10 h-10 p-2 bg-white rounded-full shadow hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition duration-300" />
          <FaBehance className="w-10 h-10 p-2 bg-white rounded-full shadow hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition duration-300" />
        </div>

        <hr className="border-t border-gray-300 w-3/4 mx-auto mb-4" />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved | Designed by <span className="text-purple-600 font-semibold">Arif Ansari</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
