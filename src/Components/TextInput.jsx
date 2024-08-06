import React from "react";
import "../Styles/TextInput.css";

import { makeFirstLetterCapital } from "../lib/generalFunctions";

function TextInput({ label, register, index }) {
  return (
    <div className="text-input">
      <label htmlFor="text" className="text-input--label">
        {makeFirstLetterCapital(label)}
      </label>
      <input
        placeholder="Enter a Username"
        type="text"
        className="text-input--text"
        id="text"
        {...register(`username${index + 1}`)}
      />
    </div>
  );
}

export default TextInput;
