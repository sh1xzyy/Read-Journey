import css from "./MyReading.module.css";
import DashBoard from "../../shared/ui/DashBoard/DashBoard";
import clsx from "clsx";
import ImageStub from "../../shared/ui/ImageStub/ImageStub";

const MyReading = ({ isReading, book }) => {
  console.log(book);

  return (
    <DashBoard type="myReading">
      <div className={css.myReadingHeader}>
        <h2 className={css.myReadingTitle}>My reading</h2>
        {book?.hours && book?.minutes && (
          <span className={css.myReadingTime}>
            {book?.hours} hours and {book?.minutes} minutes left
          </span>
        )}
      </div>

      <div className={css.myReadingInfoWrapper}>
        {book?.imageUrl ? (
          <img
            className={css.myReadingImg}
            src={book?.imageUrl}
            alt={book?.title}
          />
        ) : (
          <ImageStub type="library" />
        )}

        <div className={css.myReadingTextWrapper}>
          <h3 className={css.myReadingName}>{book?.title}</h3>
          <h4 className={css.myReadingAuthor}>{book?.author}</h4>
        </div>

        <div
          className={clsx(css.readingIndicator, isReading && css.active)}
        ></div>
      </div>
    </DashBoard>
  );
};

export default MyReading;
