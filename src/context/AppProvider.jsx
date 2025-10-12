import ModalBookDescriptionProvider from "./ModalBookDescriptionContext/ModalBookDescriptionProvider";
import ModalCreatedCategoryProvider from "./ModalCreatedCategoryContext/ModalCreatedCategoryProvider";

const AppProvider = ({ children }) => {
  return (
    <ModalCreatedCategoryProvider>
      <ModalBookDescriptionProvider>{children}</ModalBookDescriptionProvider>
    </ModalCreatedCategoryProvider>
  );
};

export default AppProvider;
