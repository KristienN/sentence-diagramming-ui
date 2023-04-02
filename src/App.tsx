import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Draw from './components/draw/Draw';
import Landing from './components/landing/Landing';
import Learn from './components/learn/Learn';
import Navbar from './components/navbar/Navbar';
import Quiz from './components/quiz/Quiz';
import ThankYou from './components/thankyou/ThankYou';

function App() {
  return (
      <div className="select-none">
        <Navbar />
        <BrowserRouter basename='sentence-diagramming-ui'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="learn" element={<Learn />} />
            <Route path="draw" element={<Draw />} />
            <Route path="thank" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
