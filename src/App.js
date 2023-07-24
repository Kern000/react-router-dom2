import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';

export default function App(){
  return(
    <React.Fragment>
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link"> Home </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/aboutus" className="nav-link"> About Us </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/contactus" className="nav-link"> Contact Us </Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}
