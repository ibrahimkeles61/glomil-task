import "./App.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import { setFormValues, setFavoriteColors } from "./features/user/userSlice";
import { changeIsOptionsOpen } from "./features/conditions/conditionsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userInstance")) {
      const storage = JSON.parse(localStorage.getItem("userInstance"));
      dispatch(setFormValues(storage.formValues));
      // dispatch(setFavoriteColors(storage.favoriteColors));
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
