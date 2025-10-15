import clsx from "clsx";
import css from "./Details.module.css";
import Diary from "../Diary/Diary";
import Statistics from "../Statistics/Statistics";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBook } from "../../../../entities/book/model/selectors";

const Details = () => {
  const book = useSelector(selectBook);
  const [openIndex, setOpenIndex] = useState(0);

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
          >
            <svg className={clsx(css.icon, openIndex === 0 && css.active)}>
              <use href="/icons/icons.svg#icon-hour-glass"></use>
            </svg>
          </button>
          <button
            className={css.button}
            type="button"
            onClick={() => setOpenIndex(1)}
          >
            <svg className={clsx(css.icon, openIndex === 1 && css.active)}>
              <use href="/icons/icons.svg#icon-pie-chart"></use>
            </svg>
          </button>
        </div>
      </div>
      {openIndex === 0 ? <Diary book={book} /> : <Statistics book={book} />}
    </div>
  );
};

export default Details;
