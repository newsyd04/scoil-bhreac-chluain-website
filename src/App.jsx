import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ParentsInfo from "./pages/ParentsInfo"
import CommunicationsPolicyPage from "./pages/CommunicationsPolicyPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} /> 
          <Route path="/parents-information" element={<ParentsInfo />} />
          <Route path="/communications-policy" element={<CommunicationsPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
