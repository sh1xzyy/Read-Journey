import Filters from "../../modules/filters/Filters";
import RecommendedBooks from "../../modules/recommendedBooks/RecommendedBooks";
import css from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  return (
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
  );
};

export default RecommendedPage;
