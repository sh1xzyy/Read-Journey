import { useSelector } from "react-redux";
import DashboardCard from "../../../../shared/ui/DashBoardCard/DashBoardCard";
import css from "./RecommendedBooks.module.css";
import { selectRecommendedBooks } from "../../../../entities/book/model/selectors";
import { Link } from "react-router-dom";
import ImageStub from "../../../../shared/ui/ImageStub/ImageStub";

const RecommendedBooks = ({ setCurPage }) => {
  const recommendedBooks = useSelector(selectRecommendedBooks);

  return (
    <DashboardCard>
      <h2 className={css.recommendedBooksTitle}>Recommended books</h2>
      <ul className={css.recommendedBooksList}>
        {recommendedBooks?.results?.map((book) => (
          <li key={book._id}>
            {book?.imageUrl ? (
              <img
                className={css.recommendedBooksItemImg}
                src={book.imageUrl}
                alt={book?.title}
              />
            ) : (
              <ImageStub />
            )}
            <h3 className={css.recommendedBooksItemName} title={book.title}>
              {book.title}
            </h3>
            <h4 className={css.recommendedBooksItemAuthor} title={book.author}>
              {book.author}
            </h4>
          </li>
        ))}
      </ul>

      <div className={css.buttonsWrapper}>
        <Link className={css.toLibraryLink} to="/recommended">
          Home
        </Link>

        <button
          className={css.rightButton}
          type="button"
          onClick={() => setCurPage((prev) => ++prev)}
        >
          <svg className={css.recommendedIcon} width={24} height={24}>
            <use href="/icons/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </DashboardCard>
  );
};

export default RecommendedBooks;
