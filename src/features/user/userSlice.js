import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "murat tufan",
  userEmail: "murat.tufan@glomil.com",
  formValues: {
    username1: "",
    username2: "",
    username3: "",
    username4: "",
    username5: "",
    username6: "",
  },
  favoriteColors: [],
  colorOptions: [
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
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials: (state, { payload }) => {
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
    },
    setFormValues: (state, { payload }) => {
      state.formValues = payload;

      localStorage.setItem(
        "userInstance",
        JSON.stringify({
          formValues: state.formValues,
          favoriteColor: state.favoriteColors,
        })
      );
    },
    setFavoriteColors: (state, { payload }) => {
      const { inputNumber, colorObj } = payload;
      state.favoriteColors[inputNumber] = colorObj;
    },
    takeColorsFromStorage: (state, { payload }) => {
      state.favoriteColors = payload;
    },
    resetFormValuesAndColors: (state) => {
      state.formValues = {
        username1: "",
        username2: "",
        username3: "",
        username4: "",
        username5: "",
        username6: "",
      };
      state.favoriteColors = [];
    },
  },
});

export const {
  setUserCredentials,
  setFormValues,
  setFavoriteColors,
  resetFormValuesAndColors,
  takeColorsFromStorage,
} = userSlice.actions;

export default userSlice.reducer;
