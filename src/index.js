import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AppProvider } from "./Data";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Books from "./components/Books/BookList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<Books />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
