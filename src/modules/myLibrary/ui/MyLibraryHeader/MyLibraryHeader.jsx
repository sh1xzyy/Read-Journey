import clsx from "clsx";
import CustomSelect from "../../../../shared/ui/CustomSelect/CustomSelect";
import css from "./MyLibraryHeader.module.css";
import { useDispatch } from "react-redux";
import { getOwnBooksThunk } from "../../../../entities/book/model/operations";
import toast from "react-hot-toast";
const MyLibraryHeader = ({ ownBooks }) => {
  const dispatch = useDispatch();

  const onChange = async (option) => {
    try {
      await dispatch(getOwnBooksThunk({ status: option?.value })).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div
      className={clsx(
        css.myLibraryHeaderWrapper,
        ownBooks.length > 0 && css.ownBookNotEmpty
      )}
    >
      <h2 className={css.myLibraryTitle}>My library</h2>

      <CustomSelect onChange={onChange} />
    </div>
  );
};

export default MyLibraryHeader;
