import Filters from "../../modules/filters/Filters";
import RecommendedBooks from "../../modules/recommendedBooks/RecommendedBooks";
import css from "./RecommendedPage.module.css";
import ModalBookDescription from "../../shared/ui/modals/ModalBookDescription/ModalBookDescription";
import { useModalRecommendedBookDescriptionContext } from "../../context/ModalRecommendedBookDescriptionContext/useModalBookDescriptionContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getOwnBooksThunk } from "../../entities/book/model/operations";
import { useDispatch } from "react-redux";

const RecommendedPage = () => {
  const { isDescriptionModalOpen, setIsDescriptionModalOpen } =
    useModalRecommendedBookDescriptionContext();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getOwnBooksThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      {isDescriptionModalOpen && (
        <ModalBookDescription
          type="bookDescription"
          setIsModalOpen={setIsDescriptionModalOpen}
        />
      )}
      <div className="container">
        <div className={css.recommendedPageWrapper}>
          <section className={css.firstSection}>
            <Filters />
          </section>

          <section className={css.section}>
            <RecommendedBooks />
          </section>
        </div>
      </div>
    </>
  );
};

export default RecommendedPage;
