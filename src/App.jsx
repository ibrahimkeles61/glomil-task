import "./App.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import {
  setFormValues,
  takeColorsFromStorage,
} from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userInstance")) {
      const storage = JSON.parse(localStorage.getItem("userInstance"));
      dispatch(setFormValues(storage.formValues));
      // dispatch(takeColorsFromStorage(storage.favoriteColors));
    }
  });

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
