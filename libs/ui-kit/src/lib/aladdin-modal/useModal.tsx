import React, { useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return {
    showModal,
    toggleModal,
  };
};
