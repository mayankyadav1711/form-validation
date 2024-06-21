import React from "react";
import Boxes from "./Boxes";
import Comparision from "./Comparision";
import CodeSnippets from "./CodeSnippets";
const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Standard Form Validation
      </h1>
      <Boxes />
      <Comparision />
      <CodeSnippets/>
    </div>
  );
};

export default Home;
