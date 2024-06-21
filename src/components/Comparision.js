import React from 'react'

const Comparison = () => {
  return (
    <div className="w-full max-w-6xl bg-white p-4 md:p-8 rounded-lg shadow-lg mt-8 md:mt-16 overflow-x-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Comparison between Formik/Yup and React Hook Form/Zod</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left">Feature</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left bg-blue-500 hover:bg-blue-700 text-white">Formik & Yup</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left bg-rose-500 hover:bg-rose-700 text-white">React Hook Form & Zod</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Form State Management</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Easy with built-in methods</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Highly optimized with hooks</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-2 md:px-4 py-2">Validation Schema</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-sky-50">Declarative with Yup</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-rose-50">TypeScript-first with Zod</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Boilerplate Code</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">More boilerplate code</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Less boilerplate code</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-2 md:px-4 py-2">Re-renders</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-sky-50">More re-renders</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-rose-50">Minimized re-renders</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Integration Flexibility</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Less flexible</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Highly flexible</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-2 md:px-4 py-2">Learning Curve</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-sky-50">Moderate</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 bg-rose-50">Steeper with TypeScript</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Community & Support</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Large community and support</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2">Growing community and support</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comparison