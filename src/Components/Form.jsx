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
    </div>
  );
}

export default Form;
