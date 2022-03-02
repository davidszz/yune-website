import { useContext } from "react";

import { ModalContext } from "@contexts/ModalContext";

export function useModal() {
  const value = useContext(ModalContext);
  return value;
}