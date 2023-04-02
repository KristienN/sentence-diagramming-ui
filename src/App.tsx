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
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/quiz" Component={Quiz} />
            <Route path="/learn" Component={Learn} />
            <Route path="/draw" Component={Draw} />
            <Route path="/thank" Component={ThankYou} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
