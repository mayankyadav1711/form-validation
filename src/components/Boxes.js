import React from 'react'
import { useNavigate } from 'react-router-dom';

const Boxes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto px-4 mb-16">
        {/* Formik Box */}
        <div className="bg-sky-50 p-6 md:p-8 rounded-lg shadow-lg w-full md:w-[45%] mb-8 md:mb-0">
          <div className="flex justify-center mb-4">
            <img src="https://i.ibb.co/GcXcKzp/20e6b8d4515c7e1ed6f1db25a2a3d3f2-2.png" alt="Formik Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Formik & Yup</h2>
          <p className="mb-4 text-gray-700 text-sm md:text-base">
            <span className="font-bold">Formik </span> is a popular library for building forms in React. It provides a simple way to manage form state, handle validation, and submit forms. <br /><br />
            <span className="font-bold">Yup </span> is a JavaScript schema builder for value parsing and validation, often used with Formik to define validation rules.
          </p>
          <button
            onClick={() => navigate('/formikyup')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Open Formik Form
          </button>
        </div>

        {/* React Hook Form Box */}
        <div className="bg-rose-50 p-6 md:p-8 rounded-lg shadow-lg w-full md:w-[45%]">
          <div className="flex justify-center mb-4">
            <img src="https://i.ibb.co/0Mbjj1j/react-hook-form-logo-only-removebg-preview.png" alt="React Hook Form Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-rose-50" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">React Hook Form & Zod</h2>
          <p className="mb-4 text-gray-700 text-sm md:text-base">
            <span className="font-bold">React Hook Form </span> is a library that helps you validate forms in React. It minimizes re-renders and provides a better user experience. <br /><br />
            <span className="font-bold">Zod </span> is a TypeScript-first schema declaration and validation library, used with React Hook Form to define validation rules.
          </p>
          <button
            onClick={() => navigate('/reacthookform')}
            className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Open React Hook Form
          </button>
        </div>
      </div>
  )
}

export default Boxes