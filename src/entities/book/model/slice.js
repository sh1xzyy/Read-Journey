import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addBookThunk,
  getOwnBooksThunk,
  getRecommendedBooksThunk,
  removeBookByIdThunk,
} from "./operations";

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
  selectedBook: null,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    getBooksDescription: (state, action) => {
      const bookId = action.payload;
      state.selectedBook = state.recommendedBooks?.results?.find(
        (book) => book._id === bookId
      );
    },
  },
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
      .addCase(removeBookByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks = state.ownBooks.filter(
          (book) => book._id !== action.payload.id
        );
      })
      .addCase(addBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.pending,
          getOwnBooksThunk.pending,
          getOwnBooksThunk.pending,
          removeBookByIdThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.rejected,
          getOwnBooksThunk.rejected,
          getOwnBooksThunk.rejected,
          removeBookByIdThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default bookSlice.reducer;
export const { getBooksDescription } = bookSlice.actions;
