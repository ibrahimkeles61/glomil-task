import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import LoginOrSignUp from "./Pages/LoginOrSignUp";

import {
  setUserCredentials,
  setFormValues,
  setFavoriteColors,
} from "./features/user/userSlice";
import { db, doc, getDoc, auth, onAuthStateChanged } from "./firebase";

const LoggedInStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataFromFireStore = async () => {
      const docSnap = await getDoc(doc(db, "users", auth.currentUser?.uid));

      if (docSnap.exists()) {
        const { userName, userEmail, formValues, favoriteColors } =
          await docSnap.data();

        // dispatch(setUserCredentials({ userName, userEmail }));
        dispatch(setFormValues(formValues));
        dispatch(setFavoriteColors(favoriteColors));
      }
    };
    getDataFromFireStore();
  });

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
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const monitorAuthState = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("giris yapildi: user is => ", user);
          setLoggedIn(true);
        } else {
          console.log("giris yapilamadi");
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
