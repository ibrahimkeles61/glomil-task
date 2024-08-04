import React from "react";
import "../Styles/Form.css";
import TextInput from "./TextInput";
import OptionInput from "./OptionInput";

function Form() {
  return (
    <div className="form">
      <div className="form--inputs-area">
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
      <div className="form--bottom-section">
        <div className="form--switch-area">
          <div className="form--button-line">
            <span className="form--switch-area-titles">Active Switch</span>
            <div className="form--switch-button">
              <div className="form--switch-button-ball"></div>
            </div>
          </div>
          <div className="form--colors-line">
            <span className="form--switch-area-titles">Favorite color</span>
            <div className="form--checkbox-options">
              <div className="form--checkbox-options-line">
                <input type="checkbox" className="form--checkbox" />
                <span>Label checkbox</span>
              </div>

              <div className="form--checkbox-options-line">
                <input type="checkbox" className="form--checkbox" />
                <span>Label checkbox</span>
              </div>

              <div className="form--checkbox-options-line">
                <input type="checkbox" className="form--checkbox" />
                <span>Label checkbox</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form--buttons">
          <button className="form--button form--accept-button">Accept</button>
          <button className="form--button form--cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
