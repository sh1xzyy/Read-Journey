import { useModalCreatedCategoryContext } from "../../context/ModalCreatedCategoryContext/useModalCreatedCategoryContext";
import { useModalRecommendedBookDescriptionContext } from "../../context/ModalRecommendedBookDescriptionContext/useModalBookDescriptionContext";
import CreateLibrary from "../../modules/createLibrary/CreateLibrary";
import MyLibrary from "../../modules/myLibrary/MyLibrary";
import ModalBookDescription from "../../shared/ui/modals/ModalBookDescription/ModalBookDescription";
import ModalCreatedCategory from "../../shared/ui/modals/ModalCreatedCategory/ModalCreatedCategory";
import css from "./LibraryPage.module.css";

const LibraryPage = () => {
  const { isCreatedCategoryModalOpen, setIsCreatedCategoryModalOpen } =
    useModalCreatedCategoryContext();
  const { isDescriptionModalOpen, setIsDescriptionModalOpen } =
    useModalRecommendedBookDescriptionContext();

  return (
    <>
      {isDescriptionModalOpen && (
        <ModalBookDescription
          type="bookDescription"
          setIsModalOpen={setIsDescriptionModalOpen}
        />
      )}
      {isCreatedCategoryModalOpen && (
        <ModalCreatedCategory
          type="createdCategory"
          setIsModalOpen={setIsCreatedCategoryModalOpen}
        />
      )}
      <div className="container">
        <div className={css.libraryPageWrapper}>
          <section className={css.firstSection}>
            <CreateLibrary
              setIsCreatedCategoryModalOpen={setIsCreatedCategoryModalOpen}
            />
          </section>

          <section className={css.section}>
            <MyLibrary />
          </section>
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
