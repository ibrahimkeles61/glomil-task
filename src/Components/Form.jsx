import React from "react";
import styled from "styled-components";
import "../Styles/Form.css";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  deleteAColor,
  resetFormValuesAndColors,
} from "../features/user/userSlice";
import { changeShowFavoriteColors } from "../features/conditions/conditionsSlice";
import TextInput from "./TextInput";
import OptionInput from "./OptionInput";
import { nameFormatterJustFirstWord } from "../lib/generalFunctions";
import { db, doc, setDoc, auth } from "../firebase";

function Form() {
  const dispatch = useDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  const userName = useSelector((state) => state.userReducer.userName);

  const userEmail = useSelector((state) => state.userReducer.userEmail);

  const formValues = useSelector((state) => state.userReducer.formValues);

  const favoriteColors = useSelector(
    (state) => state.userReducer.favoriteColors
  );

  const showFavoriteColors = useSelector(
    (state) => state.conditionsReducer.showFavoriteColors
  );

  const handleFavoriteColorsVisibility = () =>
    dispatch(changeShowFavoriteColors());

  const handleCancel = () => dispatch(resetFormValuesAndColors());

  const handleDeleteColor = (id) => dispatch(deleteAColor(id));

  const saveDataOnFireStore = async () => {
    await setDoc(doc(db, "users", auth.currentUser?.uid), {
      userName,
      userEmail,
      formValues,
      favoriteColors,
    });
  };

  const handleSubmit = (e) => {
    // dispatch(setFormValues(data));
    saveDataOnFireStore();
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form--inputs-area">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <TextInput
              key={i}
              label="username"
              index={i}
              // register={register}
              // errors={errors}
            />
          ))}
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <OptionInput key={i} label="favorite color" inputIndex={i} />
          ))}
      </div>
      <div className="form--bottom-section">
        <div className="form--switch-area">
          <div className="form--button-line">
            <span className="form--switch-area-titles">Active Switch</span>
            <FormSwitchButton
              onClick={handleFavoriteColorsVisibility}
              showFavoriteColors={showFavoriteColors}
            >
              <FormSwitchButtonBall showFavoriteColors={showFavoriteColors} />
            </FormSwitchButton>
          </div>
          <div
            className={`form--colors-line ${!showFavoriteColors && "disabled"}`}
          >
            <span className="form--switch-area-titles">Favorite color</span>
            <div className="form--checkbox-options">
              {favoriteColors.map((colorObj) => (
                <div className="form--checkbox-options-line" key={colorObj.id}>
                  <input
                    type="checkbox"
                    className="form--checkbox"
                    defaultChecked
                    onChange={() => handleDeleteColor(colorObj.id)}
                  />
                  <span>{nameFormatterJustFirstWord(colorObj.colorName)}</span>
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

const FormSwitchButton = styled.div`
  width: 48px;
  height: 24px;
  margin-left: 14px;
  border: 2px solid var(--disabled);
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
  ${({ showFavoriteColors }) => {
    if (showFavoriteColors) {
      return `
     border-color: var(---3170f9-blue600); 
      `;
    }
  }}
`;

const FormSwitchButtonBall = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--disabled);
  transition: 0.35s ease;
  ${({ showFavoriteColors }) => {
    if (showFavoriteColors) {
      return `
      transform: translateX(24px);
  background-color: var(---3170f9-blue600);
      `;
    }
  }}
`;
