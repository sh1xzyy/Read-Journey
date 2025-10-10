import Filters from "../../modules/filters/Filters";
import css from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  return (
    <div>
      <section className={css.firstSection}>
        <div className="container">
          <Filters />
        </div>
      </section>
    </div>
  );
};

export default RecommendedPage;
