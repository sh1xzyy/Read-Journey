export const calculateProgress = (book) => {
  const { totalPages, progress } = book;

  if (!progress || progress.length === 0) {
    return {
      pagesRead: 0,
      percentage: 0,
    };
  }

  const lastProgress = progress[progress.length - 1];
  const pagesRead = lastProgress.finishPage;
  const percentage = Math.round((pagesRead / totalPages) * 100);

  return {
    pagesRead,
    percentage: Math.min(percentage, 100),
  };
};
