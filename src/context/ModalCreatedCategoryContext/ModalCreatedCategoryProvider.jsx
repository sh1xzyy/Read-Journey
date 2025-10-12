import { useState } from "react";
import { ModalCreatedCategoryContext } from "./useModalCreatedCategoryContext";

const ModalCreatedCategoryProvider = ({ children }) => {
  const [isCreatedCategoryModalOpen, setIsCreatedCategoryModalOpen] =
    useState(false);
  return (
    <ModalCreatedCategoryContext
      value={{ isCreatedCategoryModalOpen, setIsCreatedCategoryModalOpen }}
    >
      {children}
    </ModalCreatedCategoryContext>
  );
};

export default ModalCreatedCategoryProvider;
