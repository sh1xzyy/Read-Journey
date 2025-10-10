import clsx from "clsx";
import css from "./DashBoard.module.css";
const DashBoard = ({ children, type }) => {
  return (
    <div
      className={clsx(
        css.wrapper,
        type === "filters" && css.filtersWrapper,
        type === "recommended" && css.recommendedWrapper,
        type === "library" && css.libraryWrapper
      )}
    >
      {children}
    </div>
  );
};

export default DashBoard;
