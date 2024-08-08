import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wrapNavigation: true,
  isHeaderOptionsOpen: false,
  showFavoriteColors: false,
  isOptionsOpen: [
    { inputIndex: 0, condition: false },
    { inputIndex: 1, condition: false },
    { inputIndex: 2, condition: false },
  ],
};

export const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    changeWrapNavigation: (state, { payload }) => {
      if (payload != null) state.wrapNavigation = payload;
      else state.wrapNavigation = !state.wrapNavigation;
    },
    changeIsHeaderOptionsOpen: (state, { value }) => {
      if (value) state.isHeaderOptionsOpen = value;
      else state.isHeaderOptionsOpen = !state.isHeaderOptionsOpen;
    },
    changeShowFavoriteColors: (state) => {
      state.showFavoriteColors = !state.showFavoriteColors;
    },
    changeIsOptionsOpen: (state, { payload }) => {
      if (typeof payload == "number") {
        state.isOptionsOpen.find((e) => e.inputIndex == payload).condition =
          !state.isOptionsOpen.find((e) => e.inputIndex == payload).condition;
      }
      //  else {
      //   state.isOptionsOpen = state.isOptionsOpen.map((e) => {
      //     return { inputIndex: e.inputIndex, condition: false };
      //   });
      // }
    },
  },
});

export const {
  changeWrapNavigation,
  changeIsHeaderOptionsOpen,
  changeShowFavoriteColors,
  changeIsOptionsOpen,
} = conditionsSlice.actions;

export default conditionsSlice.reducer;
