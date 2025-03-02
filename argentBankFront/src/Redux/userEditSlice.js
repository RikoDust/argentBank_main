// USER-EDIT_SLICE

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Définition de l'état initial
const initialState = {
  isEditing: false, // Mode édition activé/désactivé
};

// Action asynchrone pour mettre à jour le userName via l'API
export const updateUserName = createAsyncThunk(
  "userEdit/updateUserName",
  async (newUserName, { getState, rejectWithValue }) => {
    const token = getState().user.user?.token;
    if (!token) return rejectWithValue("No token available");

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      if (!response.ok) {
        throw new Error("Failed to update userName");
      }

      const data = await response.json();
      return data.body; // Contient le userName mis à jour
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Création du Slice Redux
const userEditSlice = createSlice({
  name: "userEdit",
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.fulfilled, (state) => {
        state.isEditing = false; // Ferme le mode édition après mise à jour
      })
      .addCase(updateUserName.rejected, ( action) => {
        console.error("Erreur lors de la mise à jour du userName :", action.payload);
      });
  },
});

// Vérification : Affiche l'état initial dans la console
// console.log("✅ Initial userEdit state:", initialState);

export const { toggleEditMode } = userEditSlice.actions;
export default userEditSlice.reducer;

