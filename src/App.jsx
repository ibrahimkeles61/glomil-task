import "./App.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import {
  setUserCredentials,
  setFormValues,
  setFavoriteColors,
} from "./features/user/userSlice";
import { db, doc, getDoc } from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // if (localStorage.getItem("userInstance")) {
    //   const storage = JSON.parse(localStorage.getItem("userInstance"));
    //   dispatch(setFormValues(storage.formValues));
    //   dispatch(setFavoriteColors(storage.favoriteColors));
    // }
    const getDataFromFireStore = async () => {
      const docSnap = await getDoc(doc(db, "users", "Ap0gTDiMrLSVj9Stlk63"));

      if (docSnap.exists()) {
        // const userName = await docSnap.data().userName;
        // const userEmail = await docSnap.data().userEmail;
        // const formValues = await docSnap.data().formValues;
        // const favoriteColors = await docSnap.data().favoriteColors;
        const { userName, userEmail, formValues, favoriteColors } =
          await docSnap.data();

        dispatch(setUserCredentials({ userName, userEmail }));
        dispatch(setFormValues(formValues));
        dispatch(setFavoriteColors(favoriteColors));
        // console.log(userName, userEmail, formValues, favoriteColors);
      }
    };
    getDataFromFireStore();
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
