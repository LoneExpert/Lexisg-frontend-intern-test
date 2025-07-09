import React from "react";

const CitationCard = ({ citation }) => {
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-700 mb-1">
        <strong>Citation:</strong> “{citation.text}”
      </p>
      <a
        href={`${process.env.PUBLIC_URL}${citation.link}#page=3`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View Judgment PDF
      </a>
      <p className="text-xs text-gray-500 italic mt-1">
        *Paragraph 7 reference (opens Page 3)
      </p>
    </div>
  );
};

export default CitationCard;
