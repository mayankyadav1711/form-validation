import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mt-16 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="flex items-center mb-4 md:mb-0">
          <img 
  src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg" // Replace with your actual photo URL
  alt="Mayank Yadav"
  className="w-16 h-16 rounded-full border-2 mr-4 transition duration-300 transform hover:scale-110"
/>

            <div>
              <h3 className="text-xl font-bold text-gray-800"> <a href='https://mayank-dev.vercel.app' target='_blank'> Mayank Yadav </a></h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mayankyadav17/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transform hover:scale-110 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/mayankyadav1711" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors transform hover:scale-110 duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/mayankyadav_17" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="bg-gray-100 px-6 py-4">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Contributed by <span className="font-bold"><a href='https://mayank-dev.vercel.app' target='_blank'> Mayank Yadav </a></span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer