import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing.tsx";
import E404Page from "./pages/404.tsx";

import "./index.css";
import AboutPage from "./pages/About.tsx";
import ContactPage from "./pages/Contact.tsx";
import PortfolioPage from "./pages/Portfolio.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<div>Login page</div>} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="*" element={<E404Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
