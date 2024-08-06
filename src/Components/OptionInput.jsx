import React, { useState } from "react";
import "../Styles/OptionInput.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Triangle from "./Triangle";
import {
  nameFormatter,
  nameFormatterJustFirstWord,
} from "../lib/generalFunctions";
import { setFavoriteColors } from "../features/user/userSlice";
import { changeIsOptionsOpen } from "../features/conditions/conditionsSlice";

function OptionInput({ label, inputNumber }) {
  const dispatch = useDispatch();

  const colorOptions = useSelector((state) => state.userReducer.colorOptions);

  // const [selectedValue, setSelectedValue] = useState("Select An Option");
  const selectedValue = useSelector(
    (state) => state.userReducer.favoriteColors[inputNumber]
  );

  // const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const isOptionsOpen = useSelector(
    (state) => state.conditionsReducer.isOptionsOpen[inputNumber - 1]
  );

  const handleToggleOptions = () =>
    dispatch(changeIsOptionsOpen({ optionInputNumber: inputNumber - 1 }));

  // const handleColorPick = () =>  dispatch(setFavoriteColors({color1:colors[2].colorName}))
  const handleColorPick = (colorObj) =>
    dispatch(setFavoriteColors({ inputNumber, colorObj }));

  return (
    <label className="option-input" onClick={handleToggleOptions}>
      <p className="option-input--title">{nameFormatterJustFirstWord(label)}</p>

      <Select isOptionsOpen={isOptionsOpen} selectedValue={selectedValue}>
        {selectedValue
          ? nameFormatterJustFirstWord(selectedValue.colorName)
          : "Select An Option"}
        <Triangle isOptionsOpen={isOptionsOpen} />
      </Select>

      {isOptionsOpen &&
        colorOptions.map((colorObj, i) => (
          <Option
            key={colorObj.id}
            iterationForOptions={39 * i}
            isIhisLastOne={i == colorOptions.length - 1 && true}
            onClick={() => handleColorPick(colorObj)}
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
  cursor: pointer;

  width: 100%;
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
    if (props.selectedValue) {
      return `
      background: var(--white);
      border: 1px solid var(--primary);
      `;
    }
  }}

  @media screen and (max-width: 1536px) {
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 640px) {
  }
`;

const Option = styled.div`
  width: 420px;
  height: 39px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -${(props) => 39 + props.iterationForOptions}px;
  background: var(--white);
  border-width: 0 1px 0 1px;
  cursor: pointer;
  ${(props) => {
    if (props.isIhisLastOne) {
      return `
      border-width: 0 1px 1px 1px;
      border-radius: 0px 0px 4px 4px;
      `;
    }
  }}

  border-color: var(---3170f9-blue600);
  border-style: solid;
  padding-left: 16px;
  gap: 7px;
  z-index: 50;

  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--primary-262626);
  text-align: left;
  // font: normal normal normal 14px/20px Inter;
  // letter-spacing: 0px;
  // color: #262626;
  opacity: 1;

  @media screen and (max-width: 1918px) {
    width: 100%;
  }

  @media screen and (max-width: 1536px) {
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 640px) {
  }
`;

const ColorBall = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};

  @media screen and (max-width: 1536px) {
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 640px) {
  }
`;
