import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import toast from "react-hot-toast";

const CodeSnippet = ({ title, code, language }) => {
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    copy(code);
    toast.success("Code copied to clipboard!");
  };

  // Run Prism syntax highlighting on component mount and update
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-full max-h-96 overflow-auto">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <p className="text-sm text-gray-600 mb-4">
        Example code snippet demonstrating {title ? `"${title}"` : "the code"} using {language}:
      </p>
      <pre className="max-w-full overflow-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <button
        onClick={handleCopyClick}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mt-4 rounded-md focus:outline-none"
      >
        <FontAwesomeIcon icon={faCopy} className="mr-2" />
        Copy
      </button>
    </div>
  );
};

CodeSnippet.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeSnippet;
