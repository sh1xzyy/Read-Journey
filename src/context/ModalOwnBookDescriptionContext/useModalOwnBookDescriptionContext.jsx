import { createContext, useContext } from "react";

export const ModalOwnBookDescriptionContext = createContext();
export const useModalOwnBookDescriptionContext = () =>
  useContext(ModalOwnBookDescriptionContext);
