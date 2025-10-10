import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getRecommendedBooksThunk } from "./operations";

const initialState = {
  isLoading: false,
  recommendedBooks: {
    results: [
      {
        _id: "",
        title: "",
        author: "",
        imageUrl: "",
        totalPages: null,
        recommend: null,
      },
    ],
    totalPages: null,
    page: null,
    perPage: null,
  },
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendedBooks = action.payload;
      })
      .addMatcher(
        isAnyOf(getRecommendedBooksThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(getRecommendedBooksThunk.rejected, (state) => {
          state.isLoading = false;
        })
      );
  },
});

export default bookSlice.reducer;
