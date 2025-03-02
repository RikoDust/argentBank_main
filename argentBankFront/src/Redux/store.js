// STORE

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEditReducer from "./userEditSlice";
import { thunk } from "redux-thunk";  // Ajout de redux-thunk



const store = configureStore({
  reducer: {
    user: userReducer,
    userEdit: userEditReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Ajout du middleware thunk pour gérer les actions asynchrones
});




export default store;
