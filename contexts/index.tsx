import { EActiveModal } from "@/utils/enums";
import { IActiveModalContext } from "interfaces/contexts";
import { createContext } from "react";

export const ActiveModalContext = createContext<IActiveModalContext>({
  activeModal: EActiveModal.None,
  setActiveModal: () => { },
});