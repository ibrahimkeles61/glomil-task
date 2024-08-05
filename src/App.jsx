import { useState, useRef } from "react";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="wrapper-without-header">
          <Navigation />
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
