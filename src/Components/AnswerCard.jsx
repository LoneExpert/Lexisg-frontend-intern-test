import React from "react";

const AnswerCard = ({ answer, citations }) => {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Answer</h2>
      <p className="text-gray-700">{answer}</p>

      <div className="mt-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Citation:</h3>
        {citations.map((citation, index) => (
          <div key={index} className="text-gray-700 mb-3">
            <p className="italic mb-1">“{citation.text}” (Para 7 of the document)</p>
            <a
              href={`/${citation.source}#page=2`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
