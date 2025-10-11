import { useDispatch, useSelector } from "react-redux";
import BaseModal from "../BaseModal/BaseModal";
import { addBookFromRecommendsByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
import css from "./ModalBookDescription.module.css";
import { selectSelectedBook } from "../../../../entities/book/model/selectors";

const ModalBookDescription = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const book = useSelector(selectSelectedBook);

  const onClick = async (id) => {
    try {
      await dispatch(addBookFromRecommendsByIdThunk(id)).unwrap();
      toast.success("Successfully added book into library");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <BaseModal setIsModalOpen={setIsModalOpen}>
      {book.imageUrl ? (
        <img
          className={css.modalBookDescriptionItemImg}
          src={book.imageUrl}
          alt={book.author}
        />
      ) : (
        <div className={css.modalBookDescriptionIconWrapper}>
          <svg className={css.modalBookDescriptionIcon}>
            <use href="/public/icons/icons.svg#icon-open-book"></use>
          </svg>
        </div>
      )}

      <div className={css.modalBookDescriptionTextWrapper}>
        <h3 className={css.modalBookDescriptionItemName} title={book.title}>
          {book.title}
        </h3>
        <h4 className={css.modalBookDescriptionItemAuthor} title={book.author}>
          {book.author}
        </h4>
        <span className={css.modalBookDescriptionTotalPage}>
          {book.totalPages} pages
        </span>
      </div>

      <button
        className={css.addToLibraryBtn}
        type="button"
        onClick={() => onClick(book._id)}
      >
        Add to library
      </button>
    </BaseModal>
  );
};

export default ModalBookDescription;
