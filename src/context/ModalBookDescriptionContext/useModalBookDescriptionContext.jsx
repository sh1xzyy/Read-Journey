import { createContext, useContext } from "react";

export const ModalBookDescriptionContext = createContext();
export const useModalBookDescriptionContext = () =>
  useContext(ModalBookDescriptionContext);
