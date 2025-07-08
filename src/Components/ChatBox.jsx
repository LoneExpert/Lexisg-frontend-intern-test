import React, { useState } from "react";
import AnswerCard from "./AnswerCard";

const ChatBox = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setResponse({
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "As the age of the deceased at the time of accident was held to be about 54–55 years... (Para 7)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        placeholder="Ask your legal question..."
        rows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || query.trim() === ""}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Submit"}
      </button>

      {response && <AnswerCard answer={response.answer} citations={response.citations} />}
    </div>
  );
};

export default ChatBox;