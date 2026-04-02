import { useState } from 'react';
import { useDisclosure } from '../../hooks/useDisclosure';
import { LOCALE } from '../../data/home/locale';

export const useHeader = () => {
  const [selectedLocale, setSelectedLocale] = useState(LOCALE[0]);
  const { isOpen, toggle, close, ref: wrapperRef } = useDisclosure();

  const handleChangeLocale = (lang) => {
    close();
    setSelectedLocale(lang);
  };

  return {
    selectedLocale,
    handleChangeLocale,
    isOpen,
    toggle,
    wrapperRef,
  };
};
