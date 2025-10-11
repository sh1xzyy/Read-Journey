import clsx from "clsx";
import CustomSelect from "../../../../shared/ui/CustomSelect/CustomSelect";
import css from "./MyLibraryHeader.module.css";
const MyLibraryHeader = ({ ownBooks }) => {
  return (
    <div
      className={clsx(
        css.myLibraryHeaderWrapper,
        ownBooks.length > 0 && css.ownBookNotEmpty
      )}
    >
      <h2 className={css.myLibraryTitle}>My library</h2>

      <CustomSelect />
    </div>
  );
};

export default MyLibraryHeader;
