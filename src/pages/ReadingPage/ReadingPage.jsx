import { useDispatch, useSelector } from "react-redux";
import MyReading from "../../modules/myReading/MyReading";
import ReadingBoard from "../../modules/readingLeftSideBoard/ReadingBoard";
import css from "./ReadingPage.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getBookByIdThunk } from "../../entities/book/model/operations";
import { useParams } from "react-router-dom";
import { selectBook } from "../../entities/book/model/selectors";
import ModalFinishedReading from "../../shared/ui/modals/ModalFinishedReading/ModalFinishedReading";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector(selectBook);
  const [isFinishedModalOpen, setIsFinishedModalOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getBookByIdThunk(id)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch, id]);

  useEffect(() => {
    if (book?.status === "done") {
      setIsFinishedModalOpen(true);
    }
  }, [book?.status]);

  const isProgress = book?.progress?.length > 0;
  const isReadingCondition =
    book?.progress[book?.progress?.length - 1]?.status === "active";

  useEffect(() => {
    setIsReading(isReadingCondition);
  }, [isReadingCondition]);

  return (
    <>
      {book?.status === "done" && isFinishedModalOpen && (
        <ModalFinishedReading setIsModalOpen={setIsFinishedModalOpen} />
      )}
      <div className="container">
        <div className={css.readingPageWrapper}>
          <section className={css.firstSection}>
            <ReadingBoard
              isProgress={isProgress}
              isReading={isReading}
              setIsReading={setIsReading}
            />
          </section>
          <section className={css.section}>
            <MyReading isReading={isReading} book={book} />
          </section>
        </div>
      </div>
    </>
  );
};

export default ReadingPage;
