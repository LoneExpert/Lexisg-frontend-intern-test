import React, { useState } from "react";
import PDFViewer from "./PDFViewer";

const CitationCard = ({ citation }) => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-700 mb-1">
        <strong>Citation:</strong> “{citation.text}”
      </p>
      <button
        onClick={() => setShowPDF(!showPDF)}
        className="text-blue-600 hover:underline text-sm"
      >
        {showPDF ? "Hide PDF" : "View Judgment PDF"}
      </button>

      {showPDF && (
        <div>
          <PDFViewer fileUrl={citation.link} />
          <p className="text-xs text-gray-500 italic mt-1">
            *Paragraph 7 shown (simulated by rendering Page 3)
          </p>
        </div>
      )}
    </div>
  );
};

export default CitationCard;
