import BaseModal from "../BaseModal/BaseModal";
import css from "./ModalFinishedReading.module.css";

const ModalFinishedReading = ({ setIsModalOpen }) => {
  return (
    <BaseModal setIsModalOpen={setIsModalOpen} type="finishReading">
      <picture>
        <source
          srcSet="/common/book-tablet@1x.png 1x, /common/book-tablet@2x.png 2x"
          media="(min-width: 768px)"
        />
        <img
          className={css.image}
          src="/common/book-mobile@1x.png"
          srcSet="/common/book-mobile@1x.png 1x,
            /common/book-mobile@2x.png 2x"
          alt="book"
          loading="lazy"
        />
      </picture>
      <h2 className={css.title}>The book is read</h2>
      <p className={css.description}>
        It was an <span>exciting journey</span>, where each page revealed new
        horizons, and the characters became inseparable friends.
      </p>
    </BaseModal>
  );
};

export default ModalFinishedReading;
