import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wrapNavigation: true,
  isHeaderOptionsOpen: false,
  showFavoriteColors: false,
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
  },
});

export const {
  changeWrapNavigation,
  changeIsHeaderOptionsOpen,
  changeShowFavoriteColors,
} = conditionsSlice.actions;

export default conditionsSlice.reducer;
