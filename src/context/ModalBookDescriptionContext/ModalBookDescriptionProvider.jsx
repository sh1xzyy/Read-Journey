import { useState } from "react";
import { ModalBookDescriptionContext } from "./useModalBookDescriptionContext";

const ModalBookDescriptionProvider = ({ children }) => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  return (
    <ModalBookDescriptionContext
      value={{ isDescriptionModalOpen, setIsDescriptionModalOpen }}
    >
      {children}
    </ModalBookDescriptionContext>
  );
};

export default ModalBookDescriptionProvider;
