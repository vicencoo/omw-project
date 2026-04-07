import { useState } from 'react';
import { useDisclosure } from '../../hooks/useDisclosure';
import { LOCALE } from '../../data/home/locale';
import i18n from '../../i18n';

export const useHeader = () => {
  const [selectedLocale, setSelectedLocale] = useState(LOCALE[0]);
  const { isOpen, toggle, close, ref: wrapperRef } = useDisclosure();

  const handleChangeLocale = (lang) => {
    close();
    setSelectedLocale(lang);

    i18n.changeLanguage(lang.lang);
  };

  return {
    selectedLocale,
    handleChangeLocale,
    isOpen,
    toggle,
    wrapperRef,
  };
};
