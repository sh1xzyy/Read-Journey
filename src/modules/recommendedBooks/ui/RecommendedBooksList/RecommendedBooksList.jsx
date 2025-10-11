import { useDispatch } from "react-redux";
import css from "./RecommendedBooksList.module.css";
import { getBooksDescription } from "../../../../entities/book/model/slice";
import { useModalBookDescriptionContext } from "../../../../context/ModalBookDescriptionContext/useModalBookDescriptionContext";

const RecommendedBooksList = ({ list }) => {
  const dispatch = useDispatch();
  const { setIsDescriptionModalOpen } = useModalBookDescriptionContext();

  const onClick = (id) => {
    dispatch(getBooksDescription(id));
    setIsDescriptionModalOpen(true);
  };
  return (
    <ul className={css.recommendedBooksList}>
      {list.map((book) => (
        <li
          className={css.recommendedBooksItem}
          key={book._id}
          onClick={() => onClick(book._id)}
        >
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
