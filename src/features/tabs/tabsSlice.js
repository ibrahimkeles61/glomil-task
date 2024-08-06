import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    {
      id: "pg1",
      sectionName: "home",
    },
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
      id: "pg6",
      sectionName: "gateway",
    },
    {
      id: "pg7",
      sectionName: "file-storage",
    },
  ],
  categories: [
    {
      id: "ctg1",
      sectionName: "application-manager",
    },
    {
      id: "ctg2",
      sectionName: "monitoring",
    },
    {
      id: "ctg3",
      sectionName: "console",
    },
  ],
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {},
});

export const {} = tabsSlice.actions;

export default tabsSlice.reducer;
