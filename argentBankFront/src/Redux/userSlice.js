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

    const data = await response.json(); // Convertit la réponse en JSON
    // console.log("Réponse après login :", data); // Vérification complète de la réponse

    if (!response.ok) {
      throw new Error("Invalid credentials"); // Erreur si les identifiants sont incorrects
    }

    // Vérifier si le token est dans `data.body.token` ou à la racine de `data`
    const token = data.token || data.body?.token;  // Ajouter cette vérification
    // console.log("Token extrait :", token);  // Vérifier que le token est correct

    return token; // On retourne le token pour qu'il soit stocké dans Redux
  } catch (error) {
    return rejectWithValue(error.message); // En cas d'erreur, retourne le message d'erreur
  }
});



// Action asynchrone pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async (_, { getState, rejectWithValue }) => {
  const token = getState().user.user?.token;
  if (!token) return rejectWithValue("No token available");

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("Réponse reçue :", response);


    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await response.json();
    return data.body; // On récupère les données utilisateur
  } catch (error) {
    return rejectWithValue(error.message);
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
        // console.log("✅ Connexion réussie, token reçu :", action.payload);
        state.user = { token: action.payload }; // Stocke le token reçu
        state.isLoggedIn = true; // Marque l'utilisateur comme connecté
        state.error = null;
      })

      // Ajoute les infos du profil
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })

      // Cas où la connexion échoue
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});




export const { logout } = userSlice.actions;
export default userSlice.reducer;
