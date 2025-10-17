import { useDispatch, useSelector } from "react-redux";
import BaseModal from "../BaseModal/BaseModal";
import { addBookFromRecommendsByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
import css from "./ModalBookDescription.module.css";
import {
  selectOwnBooks,
  selectSelectedOwnBook,
  selectSelectedRecommendedBook,
} from "../../../../entities/book/model/selectors";
import { Link } from "react-router-dom";
import ImageStub from "../../ImageStub/ImageStub";
import Button from "../../Button/Button";

const ModalBookDescription = ({ setIsModalOpen, type }) => {
  const dispatch = useDispatch();
  const book = useSelector(
    type === "reading" ? selectSelectedOwnBook : selectSelectedRecommendedBook
  );
  const ownBook = useSelector(selectOwnBooks);

  const handleClick = async (id) => {
    try {
      if (ownBook.some((b) => b.title === book.title)) {
        return toast.error("That book is already exist");
      }
      await dispatch(addBookFromRecommendsByIdThunk(id)).unwrap();
      toast.success("Successfully added book into library");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <BaseModal setIsModalOpen={setIsModalOpen} type={type}>
      {book?.imageUrl ? (
        <img
          className={css.modalBookDescriptionItemImg}
          src={book.imageUrl}
          alt={book.author}
          loading="lazy"
        />
      ) : (
        <ImageStub />
      )}

      <div className={css.modalBookDescriptionTextWrapper}>
        <h3 className={css.modalBookDescriptionItemName} title={book?.title}>
          {book?.title}
        </h3>
        <h4 className={css.modalBookDescriptionItemAuthor} title={book?.author}>
          {book?.author}
        </h4>
        <span className={css.modalBookDescriptionTotalPage}>
          {book?.totalPages} pages
        </span>
      </div>

      {type === "reading" ? (
        <Link
          className={css.linkToReadingPage}
          to={`/reading/${book?._id}`}
          onClick={() => setIsModalOpen(false)}
        >
          Start Reading
        </Link>
      ) : (
        <Button label="Add to library" onClick={() => handleClick(book._id)} />
      )}
    </BaseModal>
  );
};

export default ModalBookDescription;
