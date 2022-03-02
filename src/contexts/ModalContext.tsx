import { createContext, ReactNode, useEffect, useState } from "react"

import { useScrollBlock } from "@hooks/useScrollBlock";

interface IValue {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

interface IProps {
  children?: ReactNode;
}

export const ModalContext = createContext<IValue>({} as IValue);

export function ModalProvider({ children }: IProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const scrollBlock = useScrollBlock();

  useEffect(() => {
    if (modalOpen) {
      scrollBlock.blockScroll();
    } else {
      scrollBlock.allowScroll();
    }
  }, [modalOpen, scrollBlock]);
  
  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}