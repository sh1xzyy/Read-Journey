import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../shared/ui/DashBoard/DashBoard";
import css from "./RecommendedBooks.module.css";
import { useEffect, useState } from "react";
import { getRecommendedBooksThunk } from "../../entities/book/model/operations";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import RecommendedBooksList from "./ui/RecommendedBooksList/RecommendedBooksList";
import { selectRecommendedBooks } from "../../entities/book/model/selectors";
import ActionButtons from "./ui/ActionButtons/ActionButtons";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);
  const { windowWidth } = useWindowWidth();
  const limitByWindowWidth =
    windowWidth < 768 ? 2 : windowWidth < 1280 ? 8 : 10;
  const recommendedBooks = useSelector(selectRecommendedBooks);

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

        <ActionButtons
          recommendedBooks={recommendedBooks}
          setCurPage={setCurPage}
        />
      </div>

      <RecommendedBooksList list={recommendedBooks?.results} />
    </DashBoard>
  );
};

export default RecommendedBooks;
