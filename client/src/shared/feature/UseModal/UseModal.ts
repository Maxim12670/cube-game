import { useState } from "react";


export const UseModal = () => {
  const [isOpen, setIsModal] = useState<boolean>(false);

  const openModel = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

  return {
    isOpen,
    openModel,
    closeModal
  }
}