import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userName: "murat tufan",
  // userEmail: "murat.tufan@glomil.com",
  userName: "",
  userEmail: "",
  formValues: {
    username1: "",
    username2: "",
    username3: "",
    username4: "",
    username5: "",
    username6: "",
  },
  favoriteColors: [
    // {
    //   inputIndex: 1,
    //   id: "clr1",
    //   colorName: "orange",
    //   variableName: "var(---f59e0c-yellow550)",
    // },
  ],
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
    setAFormValue: (state, { payload }) => {
      const { e } = payload;
      state.formValues[e.target.name] = e.target.value;
    },
    setFormValuesToState: (state, { payload }) => {
      state.formValues = payload;
    },
    addAFavoriteColor: (state, { payload }) => {
      const ifInputsAreTheSame = state.favoriteColors.findIndex(
        (e) => e.inputIndex == payload.inputIndex
      );
      ifInputsAreTheSame == -1
        ? state.favoriteColors.push(payload)
        : (state.favoriteColors[ifInputsAreTheSame] = payload);
    },
    setFavoriteColors: (state, { payload }) => {
      state.favoriteColors = payload;
    },
    deleteAColor: (state, { payload }) => {
      const deleteThisIndex = state.favoriteColors.findIndex(
        (e) => e.id == payload
      );
      state.favoriteColors.splice(deleteThisIndex, 1);
    },
    resetColors: (state) => {
      state.favoriteColors = [];
    },
  },
});

export const {
  setUserCredentials,
  setAFormValue,
  setFormValuesToState,
  addAFavoriteColor,
  setFavoriteColors,
  deleteAColor,
  resetColors,
} = userSlice.actions;

export default userSlice.reducer;

// old addAFavoriteColor

// addAFavoriteColor: (state, { payload }) => {
//   // const ifColorExists = state.favoriteColors.findIndex(
//   //   (e) => e.id == payload.id
//   // );
//   const ifInputsAreTheSame = state.favoriteColors.findIndex(
//     (e) => e.inputIndex == payload.inputIndex
//   );

//   if (ifInputsAreTheSame !== -1) {
//     // if (ifColorExists !== -1) {
//     //   state.favoriteColors = state.favoriteColors.filter(
//     //     (e) => e.id !== payload.id
//     //   );
//     //   // state.favoriteColors.splice(ifColorExists, 1);
//     // }
//     state.favoriteColors[ifInputsAreTheSame] = payload;
//   } else {
//     // if (ifColorExists !== -1) {
//     //   state.favoriteColors[ifColorExists] = payload;
//     // }
//     state.favoriteColors.push(payload);
//   }
// },
