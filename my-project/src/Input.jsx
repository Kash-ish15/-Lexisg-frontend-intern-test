import { useState } from "react";

export default function Input({ onSubmit }) {
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

   
    onSubmit(input)
    setInput(""); // Clear input after sending
  };

  return (
   <form onSubmit={handleSubmit} className="flex gap-2 pt-4 border-t border-gray-300 bg-white">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your legal question..."
        className="flex-1 px-4 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
       Submit
      </button>
    </form>
  );
        
}
