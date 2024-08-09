import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPath: [
    {
      id: "pg2",
      sectionName: "studio",
    },
    {
      id: "pg3",
      sectionName: "datasources",
    },
    {
      id: "pg4",
      sectionName: "flow-machine",
    },
    {
      id: "pg5",
      sectionName: "micro-functions",
    },
    {
      id: "pg1",
      sectionName: "home",
    },
  ],
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addNewPageToPath: (state, { payload }) => {
      const index = state.currentPath.findIndex((e) => e.id == payload.id);

      if (index == -1) {
        state.currentPath.push(payload);
      } else {
        state.currentPath = state.currentPath.slice(0, index + 1);
      }
    },
    slicePath: (state, { payload }) => {
      const deleteFromThisIndex =
        state.currentPath.findIndex((e) => e.id == payload.id) + 1;
      state.currentPath = state.currentPath.slice(0, deleteFromThisIndex);
    },
  },
});

export const { addNewPageToPath, slicePath } = pagesSlice.actions;

export default pagesSlice.reducer;
