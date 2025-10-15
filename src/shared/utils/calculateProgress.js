export const calculateProgress = (bookData) => {
  const { totalPages, progress } = bookData;

  if (!progress || progress.length === 0) {
    return {
      pagesRead: 0,
      percentage: 0,
    };
  }

  const lastProgress = progress[progress.length - 1];

  const pagesRead =
    lastProgress.status === "active"
      ? lastProgress.startPage
      : lastProgress.finishPage;

  const percentage = Math.round((pagesRead / totalPages) * 100);

  return {
    pagesRead,
    percentage: Math.min(percentage, 100),
  };
};
