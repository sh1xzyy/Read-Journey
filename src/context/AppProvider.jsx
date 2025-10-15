import ModalCreatedCategoryProvider from "./ModalCreatedCategoryContext/ModalCreatedCategoryProvider";
import ModalOwnBookDescriptionProvider from "./ModalOwnBookDescriptionContext/ModalOwnBookDescriptionProvider";
import ModalRecommendedBookDescriptionProvider from "./ModalRecommendedBookDescriptionContext/ModalRecommendedBookDescriptionProvider";

const AppProvider = ({ children }) => {
  return (
    <ModalOwnBookDescriptionProvider>
      <ModalCreatedCategoryProvider>
        <ModalRecommendedBookDescriptionProvider>
          {children}
        </ModalRecommendedBookDescriptionProvider>
      </ModalCreatedCategoryProvider>
    </ModalOwnBookDescriptionProvider>
  );
};

export default AppProvider;
