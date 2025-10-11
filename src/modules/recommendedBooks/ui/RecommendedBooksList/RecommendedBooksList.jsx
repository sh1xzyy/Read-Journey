import css from "./RecommendedBooksList.module.css";

const RecommendedBooksList = ({ list }) => {
  return (
    <ul className={css.recommendedBooksList}>
      {list.map((book) => (
        <li key={book._id}>
          <img
            className={css.recommendedBooksItemImg}
            src={book.imageUrl}
            alt={book.author}
          />
          <h3 className={css.recommendedBooksItemName} title={book.title}>
            {book.title}
          </h3>
          <h4 className={css.recommendedBooksItemAuthor} title={book.author}>
            {book.author}
          </h4>
        </li>
      ))}
    </ul>
  );
};

export default RecommendedBooksList;
