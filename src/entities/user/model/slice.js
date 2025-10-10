import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  currentUserThunk,
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from "./operations";
const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    token: null,
    refreshToken: null,
  },
  isLoading: false,
  isRefreshing: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user.token = action.payload.token;
        state.user.refreshToken = action.payload.refreshToken;
        state.isRefreshing = false;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          loginUserThunk.pending,
          registerUserThunk.pending,
          logoutUserThunk.pending,
          currentUserThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          registerUserThunk.rejected,
          logoutUserThunk.rejected,
          currentUserThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default authSlice.reducer;
