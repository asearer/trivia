import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            Trivia App
          </Link>
        </h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/category/general" className="nav-links">
              General Trivia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/entertainment" className="nav-links">
              Entertainment Trivia
            </Link>
          </li>
          
          
          <li className="nav-item">
            <Link to="/category/science" className="nav-links">
              Science Trivia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/history" className="nav-links">
              History Trivia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/math" className="nav-links">
              Math Trivia
            </Link>
          </li>
          {/* Add more links for other categories as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
