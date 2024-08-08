import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/TextInput.css";

import { makeFirstLetterCapital } from "../lib/generalFunctions";
import { setAFormValue } from "../features/user/userSlice";

function TextInput({ label, index }) {
  const dispatch = useDispatch();

  const formValue = useSelector(
    (state) => state.userReducer.formValues[`username${index + 1}`]
  );

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
        value={formValue}
        onChange={(e) =>
          dispatch(setAFormValue({ index, value: e.target.value }))
        }
        // {...register(`username${index + 1}`, { required: true })}
      />
      {/* {errors[`username${index + 1}`] && (
        <p className="error-message-under-input">This name is required</p>
      )} */}
    </div>
  );
}

export default TextInput;
