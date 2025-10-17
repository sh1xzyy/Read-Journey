import { useDispatch } from "react-redux";
import css from "./RecommendedBooksList.module.css";
import { getRecommendedBooksDescription } from "../../../../entities/book/model/slice";
import { useModalRecommendedBookDescriptionContext } from "../../../../context/ModalRecommendedBookDescriptionContext/useModalBookDescriptionContext";
import ImageStub from "../../../../shared/ui/ImageStub/ImageStub";

const RecommendedBooksList = ({ list }) => {
  const dispatch = useDispatch();
  const { setIsDescriptionModalOpen } =
    useModalRecommendedBookDescriptionContext();

  const onThumbClick = (id) => {
    dispatch(getRecommendedBooksDescription(id));
    setIsDescriptionModalOpen(true);
  };

  return (
    <ul className={css.recommendedBooksList}>
      {list.map((book) => (
        <li className={css.recommendedBooksItem} key={book._id}>
          <div
            className={css.recommendedBookImgWrapper}
            onClick={() => onThumbClick(book._id)}
          >
            {book?.imageUrl ? (
              <img
                className={css.recommendedBooksItemImg}
                src={book.imageUrl}
                alt={book.author}
                loading="lazy"
              />
            ) : (
              <ImageStub />
            )}
          </div>

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
