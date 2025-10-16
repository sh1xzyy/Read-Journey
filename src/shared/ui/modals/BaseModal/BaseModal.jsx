import { useEffect } from "react";
import css from "./BaseModal.module.css";
import clsx from "clsx";

const BaseModal = ({ setIsModalOpen, children, type }) => {
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const onKeydownClick = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("keydown", onKeydownClick);

    return () => document.removeEventListener("keydown", onKeydownClick);
  }, [setIsModalOpen]);

  return (
    <div className={css.modalOverlay} onClick={onOverlayClick}>
      <div
        className={clsx(
          css.modal,
          type === "bookDescription" && css.recommendedBookDescriptionModal,
          type === "createdCategory" && css.createdCategoryModal,
          type === "reading" && css.readingBookDescriptionModal,
          type === "finishReading" && css.finishReadingBookDescriptionModal
        )}
      >
        <button
          className={clsx(
            css.modalCloseBtn,
            type === "bookDescription" && css.recommendedBookDescriptionBtn,
            type === "createdCategory" && css.createdCategoryBtn,
            type === "reading" && css.readingBookDescriptionBtn,
            type === "finishReading" && css.finishReadingBookDescriptionBtn
          )}
          type="button"
          onClick={() => setIsModalOpen(false)}
          aria-label="close modal button"
        >
          <svg className={css.closeIcon} width={22} height={22}>
            <use href="/icons/icons.svg#icon-close"></use>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};

export default BaseModal;
