import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LatestPage from "./pages/LatestPage";
import ParentsInfo from "./pages/ParentsInfo";
import CommunicationsPolicyPage from "./pages/CommunicationsPolicyPage";
import LoginPage from "./pages/LoginPage";
import PostUploadPage from "./pages/PostUploadPage";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/parents-information" element={<ParentsInfo />} />
        <Route path="/communications-policy" element={<CommunicationsPolicyPage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/post-upload"
          element={
            <PrivateRoute>
              <PostUploadPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
