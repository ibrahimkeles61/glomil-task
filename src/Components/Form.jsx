import React from "react";
import "../Styles/Form.css";
import TextInput from "./TextInput";
import OptionInput from "./OptionInput";

function Form() {
  return (
    <div className="form">
      <div className="inputsArea">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <TextInput key={i} label="username" />
          ))}
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <OptionInput key={i} label="favorite color" />
          ))}
      </div>

      <div className="switchArea">
        <div className="buttonLine">
          <span className="switchAreaTitles">Active Switch</span>
          <div className="switchButton">
            <div className="switchButtonBall"></div>
          </div>
        </div>
        <div className="colorsLine">
          <span className="switchAreaTitles">Favorite color</span>
          <div className="checkboxOptions">
            <div className="checkboxOptionsLine">
              <input type="checkbox" className="checkbox" />
              <span>Label checkbox</span>
            </div>

            <div className="checkboxOptionsLine">
              <input type="checkbox" className="checkbox" />
              <span>Label checkbox</span>
            </div>

            <div className="checkboxOptionsLine">
              <input type="checkbox" className="checkbox" />
              <span>Label checkbox</span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="button acceptButton">Accept</button>
        <button className="button cancelButton">Cancel</button>
      </div>
    </div>
  );
}

export default Form;
