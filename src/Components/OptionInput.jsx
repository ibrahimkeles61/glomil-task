import React, { useState } from "react";
import "../Styles/OptionInput.css";
import styled from "styled-components";
import Triangle from "./Triangle";

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

  const [selectedValue, setSelectedValue] = useState("Select An Option");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleToggleOptions = () =>
    isOptionsOpen ? setIsOptionsOpen(false) : setIsOptionsOpen(true);

  return (
    <label className="optionInput" onClick={handleToggleOptions}>
      <p className="optionInput--title">{nameFormatter(label)} </p>

      <Select isOptionsOpen={isOptionsOpen}>
        {selectedValue} <Triangle isOptionsOpen={isOptionsOpen} />
      </Select>

      {isOptionsOpen &&
        colors.map((colorObj, i) => (
          <Option
            key={colorObj.id}
            iterationForOptions={39 * i}
            isIhisLastOne={i == colors.length - 1 && true}
          >
            <ColorBall backgroundColor={colorObj.variableName} />
            {nameFormatter(colorObj.colorName)}
          </Option>
        ))}
    </label>
  );
}

export default OptionInput;

const Select = styled.div`
  background-color: var(--primary-ededed);
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--primary-262626);
  text-align: left;
  /* font: normal normal normal 14px/20px Inter;
  letter-spacing: 0px;
  color: #262626; */
  opacity: 1;

  height: 41px;
  padding: 0 14.83px 0 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => {
    if (props.isOptionsOpen) {
      return `
      background: var(--white) 0% 0% no-repeat padding-box;
      border: 1px solid var(---3170f9-blue600);
      border-radius: 4px 4px 0px 0px;
      opacity: 1;
      `;
    }
  }}
`;

const Option = styled.div`
  width: 420px;
  height: 39px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -${(props) => 39 + props.iterationForOptions}px;
  background: var(--white) 0% 0% no-repeat padding-box;
  border-width: 0 1px ${({ isIhisLastOne }) => (isIhisLastOne ? "1px" : "0")}
    1px;
  border-color: var(---3170f9-blue600);
  border-style: solid;
  padding-left: 16px;
  gap: 7px;
`;

const ColorBall = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
`;
