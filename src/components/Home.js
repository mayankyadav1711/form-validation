import React,{useState} from "react";
import Boxes from "./Boxes";
import Comparison from "./Comparision";
import CodeSnippets from "./CodeSnippets";
import ScrollToTop from "./ScrollToTop";

const FeatureCard = ({ title, description, bgColor }) => (
  <div className={`${bgColor} p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 p-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-rose-500">
          Standard Form Validation
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Explore and compare popular form validation libraries for React
        </p>
      </header>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Choose Your Validation Library</h2>
        <Boxes />
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Feature Comparison</h2>
        <Comparison />
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Code Examples</h2>
        <CodeSnippets />
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Use Form Validation?</h2>
        <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-6 rounded-lg shadow-lg">
          <ul className="list-none space-y-4 text-gray-700">
            {[
              "Improve user experience by providing immediate feedback",
              "Prevent submission of invalid or incomplete data",
              "Reduce server load by validating data on the client-side",
              "Enhance security by enforcing data format and constraints",
              "Streamline form submission process for users"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get Started</h2>
        <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-6 rounded-lg shadow-lg">
          <p className="mb-4 text-gray-700">
            Ready to implement robust form validation in your React project? Follow these steps:
          </p>
          <ol className="space-y-4 text-gray-700">
            {[
              "Choose a validation library that fits your needs",
              "Install the library and its dependencies",
              "Set up your form structure",
              "Define validation rules for your form fields",
              "Implement error handling and display",
              "Test your form with various input scenarios"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Easy Integration" 
            description="Seamlessly integrate form validation into your React applications with minimal setup."
            bgColor="bg-blue-50"
          />
          <FeatureCard 
            title="Customizable Rules" 
            description="Create custom validation rules to match your specific requirements and business logic."
            bgColor="bg-green-50"
          />
          <FeatureCard 
            title="Real-time Feedback" 
            description="Provide instant feedback to users as they fill out forms, improving user experience."
            bgColor="bg-yellow-50"
          />
          <FeatureCard 
            title="Performance Optimized" 
            description="Enjoy efficient form validation without compromising your application's performance."
            bgColor="bg-red-50"
          />
          <FeatureCard 
            title="Accessibility" 
            description="Ensure your forms are accessible to all users, including those using screen readers."
            bgColor="bg-purple-50"
          />
          <FeatureCard 
            title="Internationalization" 
            description="Easily translate validation messages to support multiple languages in your application."
            bgColor="bg-indigo-50"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">FAQ</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <FAQItem 
            question="Which validation library should I choose?" 
            answer="The choice depends on your specific needs. Formik with Yup is great for its simplicity, while React Hook Form with Zod offers better performance and TypeScript integration."
          />
          <FAQItem 
            question="Can I use these libraries with TypeScript?" 
            answer="Yes, both Formik/Yup and React Hook Form/Zod have excellent TypeScript support."
          />
          <FAQItem 
            question="Do these libraries work with React Native?" 
            answer="Yes, both libraries are compatible with React Native for mobile app development."
          />
        </div>
      </section>

      <footer className="w-full max-w-6xl text-center text-gray-600 mt-8 pb-4">
        <p>&copy;  Contributed by <span className="font-bold"> <a href="https://www.linkedin.com/in/mayankyadav17/" target="_blank"> Mayank Yadav</a> </span></p>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Home;