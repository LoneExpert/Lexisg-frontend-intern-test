// import ChatBox from "./Components/ChatBox";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
//         Lexi Legal Assistant
//       </h1>
//       <ChatBox />
//     </div>
//   );
// };

// export default App;

// import ChatBox from "./Components/ChatBox";
// import logo from './Images/logo.png'

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="flex justify-between items-center mb-6">
//         {/* Logo on the left */}
//         <img src={logo} alt="Lexi Logo" className="h-12 w-auto" />

//         {/* Text in center */}
//         <div className="flex-1 text-center">
//           <h1 className="text-xl sm:text-2xl font-bold text-blue-700">
//             Your AI-Powered Legal Companion
//           </h1>
//           <p className="text-sm text-gray-600">Trusted answers. Verified sources.</p>
//         </div>

//         {/* Spacer for alignment */}
//         <div className="w-12" /> {/* Same width as logo to balance */}
//       </div>

//       <ChatBox />
//     </div>
//   );
// };

// export default App;

import ChatBox from "./Components/ChatBox";
import logo from "./Images/logo.png";
import { FaFilePdf, FaQuestionCircle } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lexi Logo" className="h-10 w-100" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Ask Legal Questions and Get Trusted Answers
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Powered by AI and real legal documents. Ask your question and get cited answers in seconds.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6">
          <ChatBox />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Lexi Legal. Built with ❤️ for legal clarity.
      </footer>
    </div>
  );
};

export default App;
