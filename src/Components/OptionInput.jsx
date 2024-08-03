import React, { useState } from "react";
import "../Styles/OptionInput.css";
import styled from "styled-components";

import { nameFormatter } from "../lib/generalFunctions";

function OptionInput({ label }) {
  const [colors, setColors] = useState([
    {
      id: "clr1",
      colorName: "orange",
      variableName: "var(---f59e0c-yellow550)",
    },
    {
      id: "clr2",
      colorName: "blue",
      variableName: "var(---3170f9-blue600)",
    },
    {
      id: "clr3",
      colorName: "red",
      variableName: "var(---dc2625-red600)",
    },
    {
      id: "clr4",
      colorName: "purple",
      variableName: "var(---5046e6-purple600)",
    },
  ]);

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleToggleOptions = () =>
    isOptionsOpen ? setIsOptionsOpen(false) : setIsOptionsOpen(true);

  return (
    <label className="optionInput" onClick={handleToggleOptions}>
      <p className="optionInput--title">{nameFormatter(label)} </p>

      {isOptionsOpen &&
        colors.map((e, i) => (
          <ColorBall
            backgroundColor={e.variableName}
            iterationForColorBall={39 * i}
          />
        ))}

      <select
        id="optionInput--select"
        defaultValue={"default"}
        className="optionInput--select"
      >
        <option value="default" className="optionInput--select disable">
          Select An Option
        </option>

        <option value="orange" className="option">
          Orange
        </option>
      </select>
    </label>
  );
}

export default OptionInput;

const ColorBall = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  top: ${(props) => 86 + props.iterationForColorBall}px;
  left: 16px;
  z-index: 1000px;
`;
