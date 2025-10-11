import { useDispatch } from "react-redux";
import { removeBookByIdThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
import css from "./MyLibraryList.module.css";

const MyLibraryList = ({ ownBooks }) => {
  const dispatch = useDispatch();

  const deleteOwnBook = async (id) => {
    try {
      await dispatch(removeBookByIdThunk(id)).unwrap();
      toast.success("Successfully deleted a book");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <ul className={css.myLibraryList}>
      {ownBooks?.map((book) => (
        <li key={book?._id}>
          {book?.imageUrl ? (
            <img
              className={css.myLibraryItemImg}
              src={book.imageUrl}
              alt={book?.title}
            />
          ) : (
            <div className={css.myLibraryStubIconWrapper}>
              <svg className={css.myLibraryStubIcon}>
                <use href="/icons/icons.svg#icon-open-book"></use>
              </svg>
            </div>
          )}

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
