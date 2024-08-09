import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/TextInput.css";

import { makeFirstLetterCapital } from "../lib/generalFunctions";

function TextInput({ label, index, value, sendSetFormValues }) {
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
        name={`username${index + 1}`}
        value={value}
        onChange={(e) => sendSetFormValues(e)}
      />
    </div>
  );
}

export default TextInput;
