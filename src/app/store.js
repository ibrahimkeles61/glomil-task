import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import tabsReducer from "../features/tabs/tabsSlice";
import conditionsReducer from "../features/conditions/conditionsSlice";
import pagesReducer from "../features/pages/pagesSlice";

export const store = configureStore({
  reducer: { userReducer, tabsReducer, conditionsReducer, pagesReducer },
});
