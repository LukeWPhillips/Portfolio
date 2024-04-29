import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/DarkModeContext";

import HashLinkPage from "./components/HashLinkPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HashLinkPage />} />
          <Route exact path="/page" element={<HashLinkPage />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
