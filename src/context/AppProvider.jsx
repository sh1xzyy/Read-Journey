import ModalBookDescriptionProvider from "./ModalBookDescriptionContext/ModalBookDescriptionProvider";

const AppProvider = ({ children }) => {
  return (
    <ModalBookDescriptionProvider>{children}</ModalBookDescriptionProvider>
  );
};

export default AppProvider;
