import { useState } from "react";
import { ModalRecommendedBookDescriptionContext } from "./useModalBookDescriptionContext";

const ModalRecommendedBookDescriptionProvider = ({ children }) => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);

  return (
    <ModalRecommendedBookDescriptionContext
      value={{ isDescriptionModalOpen, setIsDescriptionModalOpen }}
    >
      {children}
    </ModalRecommendedBookDescriptionContext>
  );
};

export default ModalRecommendedBookDescriptionProvider;
