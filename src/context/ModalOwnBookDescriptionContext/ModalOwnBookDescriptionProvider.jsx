import { useState } from "react";
import { ModalOwnBookDescriptionContext } from "./useModalOwnBookDescriptionContext";

const ModalOwnBookDescriptionProvider = ({ children }) => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  return (
    <ModalOwnBookDescriptionContext
      value={{ isDescriptionModalOpen, setIsDescriptionModalOpen }}
    >
      {children}
    </ModalOwnBookDescriptionContext>
  );
};

export default ModalOwnBookDescriptionProvider;
