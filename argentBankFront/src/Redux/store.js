// STORE



import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEditReducer from "./userEditSlice";




const store = configureStore({
  reducer: {
    user: userReducer,
    userEdit: userEditReducer,
  },
});




export default store;
