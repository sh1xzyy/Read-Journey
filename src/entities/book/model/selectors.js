export const selectRecommendedBooks = (state) => state.book.recommendedBooks;
export const selectOwnBooks = (state) => state.book.ownBooks;
export const selectSelectedRecommendedBook = (state) =>
  state.book.selectedRecommendedBook;
export const selectSelectedOwnBook = (state) => state.book.selectedOwnBook;
export const selectBook = (state) => state.book.book;
