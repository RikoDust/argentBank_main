// USER_SLICE


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Action asynchrone pour gérer la connexion
export const loginUser = createAsyncThunk("user/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials), // Convertit les identifiants en JSON
    });

    if (!response.ok) {
      throw new Error("Invalid credentials"); // Erreur si les identifiants incorrects
    }

    const data = await response.json(); // Convertit la réponse en JSON
    return data.token; // On retourne uniquement le token de connexion
  } catch (error) {
    return rejectWithValue(error.message); // En cas d'erreur, retourne le message d'erreur
  }
});



// Création du slice Redux pour gérer l'état utilisateur
const userSlice = createSlice({
  name: "user", 
  initialState: {
    user: null,
    isLoggedIn: false, // Utilisateur connecté ?
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null; // Supprime les informations utilisateur
      state.isLoggedIn = false; // Marque l'utilisateur déconnecté
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = { token: action.payload }; // Stocke le token reçu
        state.isLoggedIn = true; // Marque l'utilisateur comme connecté
        state.error = null;
      })
      // Cas où la connexion échoue
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});




export const { logout } = userSlice.actions;
export default userSlice.reducer;
