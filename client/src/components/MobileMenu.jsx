import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { HeaderItems } from '../constants/headerItems';
import { useDisclosure } from '../hooks/useDisclosure';
import { Text } from './Text';

export const MobileMenu = ({ t }) => {
  const { toggle, close, isOpen, ref: wrapperRef } = useDisclosure();

  return (
    <div className='flex md:hidden relative' ref={wrapperRef}>
      <Menu onClick={toggle} size={27} className='cursor-pointer' />

      <div
        className={`fixed top-18 right-4 z-2200 bg-white flex w-42.5 flex-col py-3 rounded-lg px-4 gap-3 shadow-sm shadow-green-100 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        } transition-all duration-300 will-change-transform`}
      >
        <div className='flex flex-col gap-2'>
          {HeaderItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={close}
              className={({ isActive }) =>
                `uppercase text-sm font-medium tracking-wide rounded-md p-3 transition-colors duration-200 ${
                  isActive
                    ? 'text-green-700  border-b-2 border-green-300'
                    : 'text-gray-600 hover:text-green-700 hover:border-b2 border-green-300'
                }`
              }
            >
              <Text text={t(item.label)} size='text-sm' font='font-medium' />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
