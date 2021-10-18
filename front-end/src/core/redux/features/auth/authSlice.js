import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("frz-store-auth-token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      localStorage.setItem("frz-store-auth-token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    },
    removeAuthToken: (state, action) => {
      localStorage.removeItem("frz-store-auth-token");
      return {
        ...state,
        token: null,
      };
    },
  },
});

export const { setAuthToken, removeAuthToken } = authSlice.actions;

export default authSlice.reducer;
