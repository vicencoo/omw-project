import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderItems } from '../../constants/HeaderItems';
import { Text } from '../text';
import { useHeader } from './useHeader';
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import { LOCALE } from '../../data/home/locale';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const navigate = useNavigate();
  const { selectedLocale, handleChangeLocale, isOpen, toggle, wrapperRef } =
    useHeader();

  return (
    <div className='sticky top-0 z-50 flex w-full bg-white border-b border-green-100 shadow-sm shadow-green-100/50'>
      <div className='container flex w-full items-center justify-between py-3'>
        <Text
          text={'OMW'}
          font='font-semibold font-serif'
          className='tracking-wider px-4 py-1 border rounded-xl border-green-700 text-green-700 bg-green-50 cursor-pointer select-none hover:scale-105 transition-all duration-200 will-change-transform'
          onClick={() => navigate('/')}
        />
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
              {item.label}
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
              className={`absolute top-10 right-0 bg-white flex w-42.5 flex-col py-3 rounded-lg px-4 gap-3 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} transition-all duration-300 will-change-transform`}
            >
              {LOCALE.map((locale) => (
                <div
                  className='flex items-center gap-1 p-3 rounded-md border border-green-200 cursor-pointer hover:bg-green-100 transition-colors duration-200 z-[9999]'
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

          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
