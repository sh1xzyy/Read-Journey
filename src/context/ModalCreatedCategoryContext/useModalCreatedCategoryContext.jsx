import { createContext, useContext } from "react";

export const ModalCreatedCategoryContext = createContext();
export const useModalCreatedCategoryContext = () =>
  useContext(ModalCreatedCategoryContext);
