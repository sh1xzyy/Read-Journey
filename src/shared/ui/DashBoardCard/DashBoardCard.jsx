import clsx from "clsx";
import css from "./DashboardCard.module.css";
const DashboardCard = ({ children, type }) => {
  return (
    <div
      className={clsx(
        css.wrapper,
        type === "booksQuote" && css.booksQuoteWrapper
      )}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
