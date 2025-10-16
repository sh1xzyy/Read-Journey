import BaseModal from "../BaseModal/BaseModal";
import css from "./ModalCreatedCategory.module.css";

const ModalCreatedCategory = ({ setIsModalOpen, type }) => {
  return (
    <BaseModal setIsModalOpen={setIsModalOpen} type={type}>
      <picture>
        <source
          srcSet="/myLibrary/like-tablet@1x.png 1x, /myLibrary/like-tablet@2x.png 2x"
          media="(min-width: 768px)"
        />
        <img
          className={css.modalCreatedCategoryImg}
          src="/myLibrary/like-mobile@1x.png"
          srcSet="/myLibrary/like-mobile@1x.png 1x, /myLibrary/like-mobile@2x.png 2x"
          alt="like"
          loading="lazy"
        />
      </picture>

      <span className={css.modalCreatedCategoryTitle}>Good job</span>
      <p className={css.modalCreatedCategoryText}>
        Your book is now in <span>the library!</span> The joy knows no bounds
        and now you can start your training
      </p>
    </BaseModal>
  );
};

export default ModalCreatedCategory;
