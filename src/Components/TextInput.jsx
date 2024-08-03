import React from "react";
import "../Styles/TextInput.css";

import { makeFirstLetterCapital } from "../lib/generalFunctions";

function TextInput({ label }) {
  return (
    <div className="textInput">
      <label htmlFor="text" className="label">
        {makeFirstLetterCapital(label)}
      </label>
      <input
        placeholder="Enter a Username"
        type="text"
        className="text"
        id="text"
      />
    </div>
  );
}

export default TextInput;
