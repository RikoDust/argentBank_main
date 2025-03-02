// REDUCERS


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEditReducer from "./userEditSlice"; // Import du reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    userEdit: userEditReducer, // Ajout du reducer
  },
});

export default store;
