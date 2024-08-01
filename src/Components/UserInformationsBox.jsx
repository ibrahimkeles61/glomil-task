import React, { useState } from "react";
import "../Styles/UserInformationsBox.css";
import { takeFirstLetters } from "../lib/generalFunctions";

function UserInformationsBox() {
  const [userPhoto, setUserPhoto] = useState(false);
  const [userName, setUserName] = useState("murat tufan");

  return (
    <div className="userInformationsBox">
      <div className="textSection">
        <p className="userName">{userName.toUpperCase()}</p>
        <p className="email">murat.tufan@glomil.com</p>
      </div>
      {userPhoto ? (
        <img src="" alt="" className="userPhoto" />
      ) : (
        <div className="logoForUserName">
          <p>{takeFirstLetters(userName)}</p>
        </div>
      )}
    </div>
  );
}

export default UserInformationsBox;
