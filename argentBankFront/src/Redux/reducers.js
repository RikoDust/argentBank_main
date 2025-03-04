// REDUCERS


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEditReducer from "./userEditSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userEdit: userEditReducer, // Ajout du reducer
  },
});

export default store;
