import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="wrapper-without-header">
          <Navigation />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
