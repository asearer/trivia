import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './LandingPage';
import GeneralTrivia from './components/GeneralTrivia';
import ScienceTrivia from './components/ScienceTrivia';
import EntertainmentTrivia from './components/EntertainmentTrivia';
import HistoryTrivia from './components/HistoryTrivia';
import MathTrivia from './components/MathTrivia';
import './App.css';

// Define the decodeHTMLEntities function globally
window.decodeHTMLEntities = function(text) {
    var entities = {
        '&quot;': '"',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': '\''
        // Add more entities as needed
    };

    return text.replace(/&quot;|&amp;|&lt;|&gt;|&#39;/g, function (match) {
        return entities[match];
    });
};

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
