import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './LandingPage';
import GeneralTrivia from './components/GeneralTrivia';
import ScienceTrivia from './components/ScienceTrivia';
import EntertainmentTrivia from './components/EntertainmentTrivia'; // Import the EntertainmentTrivia component
import HistoryTrivia from './components/HistoryTrivia'; // Import the HistoryTrivia component
import MathTrivia from './components/MathTrivia'; // Import the MathTrivia component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/category/general" element={<GeneralTrivia />} />
            <Route path="/category/science" element={<ScienceTrivia />} />
            <Route path="/category/entertainment" element={<EntertainmentTrivia />} />
            <Route path="/category/history" element={<HistoryTrivia />} />
            <Route path="/category/math" element={<MathTrivia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
