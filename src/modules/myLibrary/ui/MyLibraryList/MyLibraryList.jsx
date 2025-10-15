import { useDispatch } from "react-redux";
import { removeBookByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
import css from "./MyLibraryList.module.css";
import { getOwnBooksDescription } from "../../../../entities/book/model/slice";
import { useModalOwnBookDescriptionContext } from "../../../../context/ModalOwnBookDescriptionContext/useModalOwnBookDescriptionContext";
import ImageStub from "../../../../shared/ui/ImageStub/ImageStub";

const MyLibraryList = ({ ownBooks }) => {
  const dispatch = useDispatch();
  const { setIsDescriptionModalOpen } = useModalOwnBookDescriptionContext();

  const deleteOwnBook = async (id) => {
    try {
      await dispatch(removeBookByIdThunk(id)).unwrap();
      toast.success("Successfully deleted a book");
    } catch (error) {
      toast.error(error);
    }
  };

  const onThumbClick = (id) => {
    dispatch(getOwnBooksDescription(id));
    setIsDescriptionModalOpen(true);
  };

  return (
    <ul className={css.myLibraryList}>
      {ownBooks?.map((book) => (
        <li key={book?._id}>
          <div onClick={() => onThumbClick(book?._id)}>
            {book?.imageUrl ? (
              <img
                className={css.myLibraryItemImg}
                src={book.imageUrl}
                alt={book?.title}
              />
            ) : (
              <ImageStub />
            )}
          </div>

          <div className={css.infoWrapper}>
            <div>
              <h3 className={css.myLibraryItemName}>{book?.title}</h3>
              <h4 className={css.myLibraryItemAuthor}>{book?.author}</h4>
            </div>

            <button
              className={css.deleteButton}
              type="button"
              onClick={() => deleteOwnBook(book?._id)}
            >
              <svg className={css.deleteIcon} width={14} height={14}>
                <use href="/icons/icons.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MyLibraryList;
