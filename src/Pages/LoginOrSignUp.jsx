import React, { useState } from "react";
import "../Styles/LoginOrSignUp.css";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../features/user/userSlice";
import {
  auth,
  setDoc,
  doc,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

function LoginOrSignUp() {
  const dispatch = useDispatch();
  const [loginPage, setLoginPage] = useState(true);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sendUserCredentials = async () => {
    await setDoc(doc(db, "users", auth.currentUser?.uid), {
      userName: username,
      userEmail: email,
    });
  };

  const handleSignUp = async () =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // signed up
        // const user = userCredentials.user;
        dispatch(setUserCredentials({ userName: username, userEmail: email }));
        sendUserCredentials();
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  const handleLogin = async () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // logged in
        // const user = userCredentials.user;
        dispatch(setUserCredentials({ userName: username, userEmail: email }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  const handleFill = () => (
    setUsername("murat tufan"),
    setEmail("murat.tufan@glomil.com"),
    setPassword(123123)
  );

  return (
    <div className="login-or-signup">
      <div className="login-or-signup--content">
        <div className="login-or-signup--inputs">
          {!loginPage && (
            <>
              <label
                htmlFor="login-or-signup--username"
                className="login-or-signup--label"
              >
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                id="login-or-signup--email"
                className="login-or-signup--input"
              />
            </>
          )}
          <label
            htmlFor="login-or-signup--email"
            className="login-or-signup--label"
          >
            E-mail
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="login-or-signup--email"
            className="login-or-signup--input"
          />
          <label
            htmlFor="login-or-signup--password"
            className="login-or-signup--label"
          >
            Password
          </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="login-or-signup--password"
            className="login-or-signup--input"
          />
        </div>
        <button className="login-or-signup--fill-button" onClick={handleFill}>
          DOLDUR
        </button>
        <div className="login-or-signup--button-wrapper">
          <button
            onClick={loginPage ? handleLogin : handleSignUp}
            className="login-or-signup--button"
          >
            {loginPage ? "Login" : "Sign Up"}
          </button>
          <p
            onClick={() => setLoginPage(!loginPage)}
            className="login-or-signup--link"
          >
            {loginPage
              ? "Don't Have an Account? Sign Up Now!"
              : "Already Have an Account? Click to Login."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginOrSignUp;
