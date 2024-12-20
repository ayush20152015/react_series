import { useState } from 'react';
import './App.css';
 import reactLogo from './assets/react.svg'; // Remove if unused
 import viteLogo from '/vite.svg'; // Remove if unused
// import Card from './assets/components/Card.jsx'; // Remove if unused

function App() {
  const [bgColor, setBgColor] = useState('white'); // Default background color

  const changeBg = (color) => {
    setBgColor(color); // Update the background color
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="min-h-screen flex items-center justify-center">
      <div className="flex justify-between gap-10">
        <button
          className="bg-purple-700 text-white p-4 rounded-xl w-full h-full"
          onClick={() => changeBg('purple')}
        >
          Purple
        </button>
        <button
          className="bg-green-700 text-white p-4 rounded-xl w-full h-full"
          onClick={() => changeBg('green')}
        >
          Green
        </button>
        <button
          className="bg-red-700 text-white p-4 rounded-xl w-full h-full"
          onClick={() => changeBg('red')}
        >
          Red
        </button>
        <button
          className="bg-blue-700 text-white p-4 rounded-xl w-full h-full"
          onClick={() => changeBg('blue')}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
