import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../shared/api/axiosInstance";

export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users/signup", body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response.data.message || "Registration failed"
      );
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/signin", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response.data.message || "Login failed");
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }

      const response = await axiosInstance.get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response.data.message || "Getting current user info failed"
      );
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const refreshToken = thunkAPI.getState().auth.user.refreshToken;
      if (!refreshToken) {
        return thunkAPI.rejectWithValue("No refreshToken");
      }

      const response = await axiosInstance.get("/users/current/refresh", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response.data.message || "Refresh failed"
      );
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }

      const response = await axiosInstance.post(
        "/users/signout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response.data.message || "Logout Failed"
      );
    }
  }
);
