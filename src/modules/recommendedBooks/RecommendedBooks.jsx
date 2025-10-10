import { useDispatch } from "react-redux";
import DashBoard from "../../shared/ui/DashBoard/DashBoard";
import css from "./RecommendedBooks.module.css";
import { useEffect, useState } from "react";
import { getRecommendedBooksThunk } from "../../entities/book/model/operations";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import RecommendedBooksList from "./ui/RecommendedBooksList/RecommendedBooksList";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);
  const { windowWidth } = useWindowWidth();
  const limitByWindowWidth =
    windowWidth < 768 ? 2 : windowWidth < 1280 ? 8 : 10;

  useEffect(() => {
    (async () => {
      await dispatch(
        getRecommendedBooksThunk({ limit: limitByWindowWidth, page: curPage })
      ).unwrap();
    })();
  }, [curPage, limitByWindowWidth, dispatch]);

  return (
    <DashBoard type="recommended">
      <div className={css.recommendedHeader}>
        <h2 className={css.recommendedTitle}>Recommended</h2>

        <div className={css.buttonsWrapper}>
          <button
            className={css.leftButton}
            type="button"
            onClick={() => setCurPage((prev) => prev - 1)}
          >
            <svg width={16} height={16}>
              <use href="/icons/icons.svg#icon-arrow-left"></use>
            </svg>
          </button>
          <button
            className={css.rightButton}
            type="button"
            onClick={() => setCurPage((prev) => prev + 1)}
          >
            <svg width={16} height={16}>
              <use href="/icons/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>

      <RecommendedBooksList />
    </DashBoard>
  );
};

export default RecommendedBooks;
