import React, { useState } from "react";
import axios from "axios";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        prompt: input,
      });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-blue-400">AI Assistant</h2>
      <textarea
        className="w-full p-3 rounded-lg text-black mb-4"
        rows={4}
        placeholder="Ask me anything about your aircraft data..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="mt-4 bg-gray-800 p-3 rounded-lg">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
