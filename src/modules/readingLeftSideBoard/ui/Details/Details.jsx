import clsx from "clsx";
import css from "./Details.module.css";
import Diary from "../Diary/Diary";
import Statistics from "../Statistics/Statistics";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBook } from "../../../../entities/book/model/selectors";
import useWindowWidth from "../../../../shared/hooks/useWindowWidth";

const Details = () => {
  const book = useSelector(selectBook);
  const [openIndex, setOpenIndex] = useState(0);
  const { windowWidth } = useWindowWidth();

  return (
    <div>
      <div className={css.header}>
        <h2 className={css.title}>
          {openIndex === 0 ? "Diary" : "Statistics"}
        </h2>

        <div className={css.btnsWrapper}>
          <button
            className={css.button}
            type="button"
            onClick={() => setOpenIndex(0)}
            aria-label="dairy button"
          >
            <svg className={clsx(css.icon, openIndex === 0 && css.active)}>
              <use href="/icons/icons.svg#icon-hour-glass"></use>
            </svg>
          </button>
          <button
            className={css.button}
            type="button"
            onClick={() => setOpenIndex(1)}
            aria-label="statistics button"
          >
            <svg className={clsx(css.icon, openIndex === 1 && css.active)}>
              <use href="/icons/icons.svg#icon-pie-chart"></use>
            </svg>
          </button>
        </div>
      </div>
      {windowWidth >= 1280 && openIndex === 1 && (
        <p className={css.description}>
          Each page, each chapter is a new round of knowledge, a new step
          towards understanding. By rewriting statistics, we create our own
          reading history.
        </p>
      )}
      {openIndex === 0 ? <Diary book={book} /> : <Statistics book={book} />}
    </div>
  );
};

export default Details;
