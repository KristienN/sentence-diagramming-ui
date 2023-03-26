import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  const message = location.state;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-10 w-1/3 h-1/2 bg-white">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <h1 className="text-xl font-bold mb-4">Your grade was</h1>
        <p className="text-4xl text-gray-700">{message.score}</p>
        <a className="text-xl text-center border border-black px-6 py-2 w-1/5" href="/">
          Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
