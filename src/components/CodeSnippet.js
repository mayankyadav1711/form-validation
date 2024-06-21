import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import toast from "react-hot-toast";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ title, code, language }) => {
  const handleCopyClick = () => {
    copy(code);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow-md max-w-full max-h-[70vh] overflow-auto">
      {title && <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">{title}</h3>}
      <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4">
        Example code snippet demonstrating {title ? `"${title}"` : "the code"} using {language}:
      </p>
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{
          fontSize: '12px',
          lineHeight: '1.5',
          padding: '1em',
          borderRadius: '4px',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopyClick}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 md:py-2 px-2 md:px-4 mt-2 md:mt-4 rounded-md focus:outline-none text-xs md:text-sm"
      >
        <FontAwesomeIcon icon={faCopy} className="mr-1 md:mr-2" />
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