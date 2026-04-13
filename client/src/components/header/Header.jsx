import { NavLink } from 'react-router-dom';
import { Text } from '../Text';
import { useHeader } from './useHeader';
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import { LOCALE } from '../../data/home/locale';
import { MobileMenu } from '../MobileMenu';
import { HeaderItems } from '../../constants/headerItems';
import { OmwLogo } from '../OmwLogo';
import { useTranslation } from 'react-i18next';
import { isAdminAuthenticated } from '../../utils/auth';

export const Header = () => {
  const { selectedLocale, handleChangeLocale, isOpen, toggle, wrapperRef } =
    useHeader();
  const { t } = useTranslation('common');
  const { isAuthenticated } = isAdminAuthenticated();

  return (
    <div className='sticky top-0 z-2000 flex w-full bg-white border-b border-green-100 shadow-sm shadow-green-100/50'>
      <div className='container flex w-full items-center justify-between py-3'>
        {/*  */}
        <OmwLogo className={isAuthenticated ? 'hidden lg:flex' : ''} />
        <span className='lg:hidden flex' />
        {/* <OmwLogo /> */}

        <div className='hidden md:flex gap-10 '>
          {HeaderItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                `relative uppercase text-[0.8rem] tracking-widest font-medium transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[1.5px] after:w-0 after:bg-green-500 after:transition-all after:duration-300
              ${
                isActive
                  ? 'text-green-700 after:w-full'
                  : 'text-gray-600 hover:text-green-700 hover:after:w-full'
              }`
              }
            >
              {t(item.label)}
            </NavLink>
          ))}
        </div>
        <div className='flex items-center gap-5'>
          <div className='relative ' ref={wrapperRef}>
            <div
              className='flex items-center gap-1 cursor-pointer select-none'
              onClick={toggle}
            >
              <img
                src={selectedLocale.flag}
                alt={selectedLocale.label}
                width={30}
                height={20}
              />
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>

            <div
              className={`absolute top-12 right-0 border border-green-100 bg-white flex w-42.5 flex-col py-3 rounded-lg px-4 gap-3 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} transition-all duration-300 will-change-transform`}
            >
              {LOCALE.map((locale) => (
                <div
                  className='flex items-center gap-1 p-3 rounded-md border border-green-200 cursor-pointer hover:bg-green-100 transition-colors duration-200 z-9999'
                  key={locale.id}
                  onClick={() => handleChangeLocale(locale)}
                >
                  <img
                    src={locale.flag}
                    alt={locale.label}
                    width={30}
                    height={20}
                  />
                  <Text text={locale.label} size='text-sm' font='font-medium' />
                </div>
              ))}
            </div>
          </div>

          <MobileMenu t={t} />
        </div>
      </div>
    </div>
  );
};
