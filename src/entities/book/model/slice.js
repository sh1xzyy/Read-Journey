import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addBookThunk,
  deleteReadingBookByIdThunk,
  finishReadingBookThunk,
  getBookByIdThunk,
  getOwnBooksThunk,
  getRecommendedBooksThunk,
  removeBookByIdThunk,
  startReadingBookThunk,
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
  book: {
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
    timeLeftToRead: {
      hours: null,
      minutes: null,
      seconds: null,
    },
  },
  selectedRecommendedBook: null,
  selectedOwnBook: null,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    getRecommendedBooksDescription: (state, action) => {
      const bookId = action.payload;
      state.selectedRecommendedBook = state.recommendedBooks?.results?.find(
        (book) => book._id === bookId
      );
    },
    getOwnBooksDescription: (state, action) => {
      const bookId = action.payload;
      state.selectedOwnBook = state.ownBooks?.find(
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
      .addCase(getBookByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(startReadingBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(finishReadingBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(deleteReadingBookByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.pending,
          getOwnBooksThunk.pending,
          getOwnBooksThunk.pending,
          removeBookByIdThunk.pending,
          getBookByIdThunk.pending,
          startReadingBookThunk.pending,
          finishReadingBookThunk.pending,
          deleteReadingBookByIdThunk.pending,
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
          getBookByIdThunk.rejected,
          startReadingBookThunk.rejected,
          finishReadingBookThunk.rejected,
          deleteReadingBookByIdThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default bookSlice.reducer;
export const { getRecommendedBooksDescription, getOwnBooksDescription } =
  bookSlice.actions;
