"use client"
import { useState } from 'react';

const page = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setShowInput(!showInput);
  };


  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
      <button onClick={toggleInput} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        {showInput ? 'Hide Input' : 'Show Input'}
      </button>
      {showInput && (
        <input
          type="text"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          placeholder="Enter something..."
           className="mt-2 p-2 border border-gray-300 rounded"
        />
      )}
    </div>
  );
}

export default page
