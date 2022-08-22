import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HashLinkPage from "./components/HashLinkPage";
import Card from "./components/shared/Card";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Burger /> */}
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route exact path="/page" element={<HashLinkPage />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
