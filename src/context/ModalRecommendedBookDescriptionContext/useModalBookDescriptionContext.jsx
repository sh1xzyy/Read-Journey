import { createContext, useContext } from "react";

export const ModalRecommendedBookDescriptionContext = createContext();
export const useModalRecommendedBookDescriptionContext = () =>
  useContext(ModalRecommendedBookDescriptionContext);
