import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getOwnBooksThunk, getRecommendedBooksThunk } from "./operations";

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
  ownBooks: [
    {
      _id: "",
      title: "",
      author: "",
      imageUrl: "",
      totalPages: null,
      status: "",
      owner: "",
      progress: [
        {
          startPage: null,
          startReading: "",
          finishPage: null,
          finishReading: "",
          speed: null,
          status: "",
        },
      ],
    },
  ],
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
      .addCase(getOwnBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.pending,
          getOwnBooksThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.rejected,
          getOwnBooksThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default bookSlice.reducer;
