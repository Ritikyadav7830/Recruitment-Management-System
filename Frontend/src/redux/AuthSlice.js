import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  admin: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    login: (state, action) => {
      state.isAuthenticated = true;
      state.admin = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
    },

  },
});

export const { login, logout } =
  authSlice.actions;

export default authSlice.reducer;