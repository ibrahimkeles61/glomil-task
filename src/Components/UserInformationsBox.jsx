import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/UserInformationsBox.css";
import { takeFirstLetters } from "../lib/generalFunctions";

function UserInformationsBox() {
  const [userPhoto, setUserPhoto] = useState(false);

  const userName = useSelector((state) => state.userReducer.userName);
  const userEmail = useSelector((state) => state.userReducer.userEmail);

  return (
    <div className="userinformations-box">
      <div className="userinformations-box--text-side">
        <p className="userinformations-box--username">
          {userName.toUpperCase()}
        </p>
        <p className="userinformations-box--email">{userEmail}</p>
      </div>
      {userPhoto ? (
        <img src="" alt="" className="userinformations-box--userphoto" />
      ) : (
        <div className="userinformations-box--username-logo">
          <p>{takeFirstLetters(userName)}</p>
        </div>
      )}
    </div>
  );
}

export default UserInformationsBox;
