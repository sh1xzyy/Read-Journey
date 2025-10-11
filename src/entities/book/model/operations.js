import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../shared/api/axiosInstance";

export const getRecommendedBooksThunk = createAsyncThunk(
  "books/recommend",
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }

      const response = await axiosInstance.get("/books/recommend", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  "books/add",
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.post("/books/add", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const addBookFromRecommendsByIdThunk = createAsyncThunk(
  "books/add/{id}",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.post(`/books/add/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const removeBookByIdThunk = createAsyncThunk(
  "books/remove/{id}",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.delete(`/books/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const getOwnBooksThunk = createAsyncThunk(
  "books/own",
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.get("/books/own", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const startReadingBookThunk = createAsyncThunk(
  "books/reading/start",
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.post("/books/reading/start", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const finishReadingBookThunk = createAsyncThunk(
  "books/reading/finish",
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.post("/books/reading/finish", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const deleteReadingBookByIdThunk = createAsyncThunk(
  "books/reading",
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.delete("/books/reading", {
        data: body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);

export const getBookByIdThunk = createAsyncThunk(
  "books/{id}",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const response = await axiosInstance.get(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response.data.message);
    }
  }
);
