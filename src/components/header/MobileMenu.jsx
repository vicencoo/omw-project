import { Menu } from 'lucide-react';
import { useDisclosure } from '../../hooks/useDisclosure';
import { HeaderItems } from '../../constants/HeaderItems';
import { Text } from '../text';
import { useNavigate } from 'react-router-dom';

export const MobileMenu = () => {
  const { toggle, close, isOpen, ref: wrapperRef } = useDisclosure();
  const navigate = useNavigate();
  return (
    <div className='flex md:hidden relative ' ref={wrapperRef}>
      <Menu onClick={toggle} size={27} />

      <div
        className={`absolute top-10 right-0 bg-white flex w-42.5 flex-col py-3 rounded-lg px-4 gap-3 shadow-sm shadow-green-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} transition-all duration-300 will-change-transform`}
      >
        <div className='flex flex-col gap-4'>
          {HeaderItems.map((item) => (
            <span
              key={item.id}
              className='uppercase text-sm font-medium tracking-wide text-gray-600 hover:text-green-700 cursor-pointer transition-colors duration-200'
              onClick={() => {
                navigate(item.path);
                close();
              }}
            >
              <Text text={item.label} size='text-sm' font='font-medium' />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
