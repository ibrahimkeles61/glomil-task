import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import LoginOrSignUp from "./Pages/LoginOrSignUp";

import {
  setUserCredentials,
  setFormValuesToState,
  setFavoriteColors,
} from "./features/user/userSlice";
import { db, doc, getDoc, auth, onAuthStateChanged } from "./firebase";

const LoggedInStack = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-without-header">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const getDataFromFireStore = async () => {
      const docSnap = await getDoc(doc(db, "users", auth.currentUser?.uid));

      if (docSnap.exists()) {
        const { userName, userEmail, formValues, favoriteColors } =
          await docSnap.data();

        if (userName !== "" && userEmail !== "") {
          dispatch(setUserCredentials({ userName, userEmail }));
        }

        formValues && dispatch(setFormValuesToState(formValues));
        favoriteColors && dispatch(setFavoriteColors(favoriteColors));
      }
    };

    const monitorAuthState = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          getDataFromFireStore();
        } else {
          setLoggedIn(false);
        }
      });
    };

    monitorAuthState();
  }, []);

  return (
    <div className="app">
      {loggedIn ? <LoggedInStack /> : <LoginOrSignUp />}
    </div>
  );
}

export default App;
