import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/UserInformationsBox.css";
import { takeFirstLetters } from "../lib/generalFunctions";
import styled from "styled-components";
import { auth, signOut } from "../firebase";

function UserInformationsBox() {
  const [userPhoto, setUserPhoto] = useState(false);
  const [showStateInformations, setShowStateInformations] = useState(false);

  const userName = useSelector((state) => state.userReducer.userName);
  const userEmail = useSelector((state) => state.userReducer.userEmail);

  const formValues = useSelector((state) => state.userReducer.formValues);
  const favoriteColors = useSelector(
    (state) => state.userReducer.favoriteColors
  );

  const handleLogOut = async () => {
    signOut(auth).catch((err) => console.log(err.message));
  };

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
        <div
          className="userinformations-box--username-logo"
          onClick={() => setShowStateInformations(!showStateInformations)}
        >
          <p>{takeFirstLetters(userName)}</p>
          {showStateInformations && (
            <StateInformations showStateInformations={showStateInformations}>
              {Object.entries(formValues).map((e, i) => (
                <p>
                  Username {i + 1}: {e[1]}
                </p>
              ))}
              {favoriteColors.map((e) => (
                <p>
                  Color {e.inputIndex + 1}: {e.colorName}
                </p>
              ))}
              <button
                className="userinformations-box--logout-button"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </StateInformations>
          )}
        </div>
      )}
    </div>
  );
}

export default UserInformationsBox;

const StateInformations = styled.div`
  position: absolute;
  width: 290px;
  height: 300px;
  background-color: var(---f9f9f9-grey50);
  bottom: -310px;
  // left: -179px;
  left: -250px;
  border-radius: 4px;
  border: 1px solid var(--search-bar-container-color);
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-around;
  padding: 10px;
  p {
    color: black;
    width: 100%;
    // text-align: center;
  }

  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--primary-262626);
  text-align: left;
`;
