import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/UserInformationsBox.css";
import { takeFirstLetters } from "../lib/generalFunctions";
import styled from "styled-components";

function UserInformationsBox() {
  const [userPhoto, setUserPhoto] = useState(false);
  const [showStateInformations, setShowStateInformations] = useState(false);

  const userName = useSelector((state) => state.userReducer.userName);
  const userEmail = useSelector((state) => state.userReducer.userEmail);

  const formValues = useSelector((state) => state.userReducer.formValues);

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
  height: 250px;
  background-color: var(---f9f9f9-grey50);
  bottom: -260px;
  left: -179px;
  border-radius: 4px;
  border: 1px solid var(--search-bar-container-color);
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-around;
  p {
    color: black;
    width: 100%;
    text-align: center;
  }

  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--primary-262626);
  text-align: left;
`;
