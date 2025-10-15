import Filters from "../../modules/filters/Filters";
import RecommendedBooks from "../../modules/recommendedBooks/RecommendedBooks";
import css from "./RecommendedPage.module.css";
import ModalBookDescription from "../../shared/ui/modals/ModalBookDescription/ModalBookDescription";
import { useModalRecommendedBookDescriptionContext } from "../../context/ModalRecommendedBookDescriptionContext/useModalBookDescriptionContext";

const RecommendedPage = () => {
  const { isDescriptionModalOpen, setIsDescriptionModalOpen } =
    useModalRecommendedBookDescriptionContext();

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
