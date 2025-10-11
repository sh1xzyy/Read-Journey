import clsx from "clsx";
import css from "./ActionButtons.module.css";

const ActionButtons = ({ recommendedBooks, setCurPage }) => {
  const isPrevButtonActive = recommendedBooks?.page !== 1;
  const isNextButtonActive =
    recommendedBooks?.page !== recommendedBooks?.totalPages;

  return (
    <div className={css.buttonsWrapper}>
      <button
        className={css.leftButton}
        type="button"
        disabled={!isPrevButtonActive}
        onClick={() => setCurPage((prev) => prev - 1)}
      >
        <svg
          className={clsx(
            css.recommendedIcon,
            isPrevButtonActive ? css.active : css.disable
          )}
          width={16}
          height={16}
        >
          <use href="/icons/icons.svg#icon-arrow-left"></use>
        </svg>
      </button>
      <button
        className={css.rightButton}
        type="button"
        disabled={!isNextButtonActive}
        onClick={() => setCurPage((prev) => prev + 1)}
      >
        <svg
          className={clsx(
            css.recommendedIcon,
            isNextButtonActive ? css.active : css.disable
          )}
          width={16}
          height={16}
        >
          <use href="/icons/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
