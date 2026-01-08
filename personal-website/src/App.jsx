// import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div className="App-container">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
