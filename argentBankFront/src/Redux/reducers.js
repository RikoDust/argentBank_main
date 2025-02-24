// REDUCERS

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"; // Import du reducer utilisateur




const store = configureStore({
  reducer: {
    user: userReducer, // Utilisation du reducer utilisateur
  },
});



export default store;
