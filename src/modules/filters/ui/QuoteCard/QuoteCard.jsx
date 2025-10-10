import DashboardCard from "../../../../shared/ui/DashBoardCard/DashBoardCard";
import css from "./QuoteCard.module.css";

const QuoteCard = () => {
  return (
    <DashboardCard type="booksQuote">
      <div className={css.bookQuoteWrapper}>
        <img
          src="/filters/books@1x.png 1x"
          srcSet="/filters/books@1x.png 1x, /filters/books@2x.png 2x"
          alt="books"
        />
        <p className={css.bookQuoteDescription}>
          "Books are <span>windows</span> to the world, and reading is a journey
          into the unknown."
        </p>
      </div>
    </DashboardCard>
  );
};

export default QuoteCard;
