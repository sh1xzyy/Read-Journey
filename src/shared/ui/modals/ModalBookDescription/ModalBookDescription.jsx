import { useDispatch, useSelector } from "react-redux";
import BaseModal from "../BaseModal/BaseModal";
import { addBookFromRecommendsByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
import css from "./ModalBookDescription.module.css";
import {
  selectSelectedOwnBook,
  selectSelectedRecommendedBook,
} from "../../../../entities/book/model/selectors";
import { Link } from "react-router-dom";
import ImageStub from "../../ImageStub/ImageStub";
import Button from "../../button/Button";

const ModalBookDescription = ({ setIsModalOpen, type }) => {
  const dispatch = useDispatch();
  const book = useSelector(
    type === "reading" ? selectSelectedOwnBook : selectSelectedRecommendedBook
  );

  const handleClick = async (id) => {
    try {
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
