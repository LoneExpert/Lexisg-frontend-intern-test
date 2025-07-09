import ChatBox from "./Components/ChatBox";
import logo from "./Images/logo.png";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lexi Logo" className="h-10 w-100" />
        </div>
      </div>
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
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Lexi Legal. Built with ❤️ for legal clarity.
      </footer>
    </div>
  );
};

export default App;
