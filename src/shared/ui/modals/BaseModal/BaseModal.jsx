import { useEffect } from "react";
import css from "./BaseModal.module.css";
import clsx from "clsx";

const BaseModal = ({ setIsModalOpen, children }) => {
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
      <div className={clsx(css.modal, css.modalAdditionalStyles)}>
        <button
          className={clsx(css.modalCloseBtn, css.btnAdditionalStyles)}
          type="button"
          onClick={() => setIsModalOpen(false)}
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
