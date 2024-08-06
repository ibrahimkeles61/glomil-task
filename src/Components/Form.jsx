import React from "react";
import styled from "styled-components";
import "../Styles/Form.css";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setFormValues,
  resetFormValuesAndColors,
} from "../features/user/userSlice";
import { changeShowFavoriteColors } from "../features/conditions/conditionsSlice";
import TextInput from "./TextInput";
import OptionInput from "./OptionInput";
import { nameFormatterJustFirstWord } from "../lib/generalFunctions";

function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const favoriteColors = useSelector(
    (state) => state.userReducer.favoriteColors
  );

  const showFavoriteColors = useSelector(
    (state) => state.conditionsReducer.showFavoriteColors
  );

  const handleFavoriteColorsVisibility = () =>
    dispatch(changeShowFavoriteColors());

  const handleCancel = () => dispatch(resetFormValuesAndColors());

  const onSubmit = (data) => (dispatch(setFormValues(data)), reset());

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form--inputs-area">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <TextInput
              key={i}
              label="username"
              index={i}
              register={register}
              errors={errors}
            />
          ))}
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <OptionInput key={i} label="favorite color" inputNumber={i + 1} />
          ))}
      </div>
      <div className="form--bottom-section">
        <div className="form--switch-area">
          <div className="form--button-line">
            <span className="form--switch-area-titles">Active Switch</span>
            <div
              className="form--switch-button"
              onClick={handleFavoriteColorsVisibility}
            >
              <FormSwitchButtonBall showFavoriteColors={showFavoriteColors} />
            </div>
          </div>
          <div
            className={`form--colors-line ${!showFavoriteColors && "disabled"}`}
          >
            <span className="form--switch-area-titles">Favorite color</span>
            <div className="form--checkbox-options">
              {favoriteColors.map((colorObj, i) => (
                <div className="form--checkbox-options-line" key={colorObj.id}>
                  <input
                    type="checkbox"
                    className="form--checkbox"
                    // defaultChecked
                    checked
                  />
                  <span>
                    {nameFormatterJustFirstWord(favoriteColors[i].colorName)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form--buttons">
          <button className="form--button form--accept-button" type="submit">
            Accept
          </button>
          <button
            className="form--button form--cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

const FormSwitchButtonBall = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(---3170f9-blue600);
  transition: 0.35s ease;
  ${({ showFavoriteColors }) => {
    if (showFavoriteColors) {
      return `
      transform: translateX(24px);
      `;
    }
  }}
`;
