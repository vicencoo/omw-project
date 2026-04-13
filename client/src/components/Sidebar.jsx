import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDisclosure } from '../hooks/useDisclosure';
import { Menu, ChevronRight, UserCircle, LogOut } from 'lucide-react';
import { Text } from './Text';
import { isAdminAuthenticated } from '../utils/auth';

export const Sidebar = ({ items = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ref: wrapperRef, isOpen, toggle } = useDisclosure();

  const { isAuthenticated, username } = isAdminAuthenticated();

  useEffect(() => {
    const body = document.body;

    if (isAuthenticated && isOpen) {
      body.classList.add('dash-open');
    } else {
      body.classList.remove('dash-open');
    }

    return () => body.classList.remove('dash-open');
  }, [isOpen, isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    document.body.classList.remove('dash-open');
    navigate('/');
  };

  if (!isAuthenticated) return null;

  return (
    <div className='fixed top-0 -left-14 h-screen z-2100' ref={wrapperRef}>
      <button
        className='absolute top-5 left-20 z-50 cursor-pointer transition-all duration-300 hover:scale-110 will-change-transform'
        onClick={toggle}
        type='button'
      >
        <Menu className={isOpen ? 'text-white' : 'text-green-900'} size={22} />
      </button>

      <div
        className={`flex flex-col bg-green-950 h-screen px-3 pt-24 pb-4 text-nowrap
          overflow-hidden transition-all duration-300 shadow-2xl
          ${
            isOpen
              ? 'w-60 opacity-100 translate-x-14'
              : 'w-0 opacity-0 -translate-x-10'
          }`}
      >
        <div className='flex flex-col gap-1 flex-1'>
          {items.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.path}
                className={`flex items-center justify-between w-full px-3 cursor-pointer py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-green-700/60 text-white'
                    : 'text-white/90 hover:bg-green-900 bg-green-900/30 hover:text-white/90'
                }`}
                onClick={() => navigate(item.path)}
              >
                <Text
                  text={item.text}
                  size='text-sm'
                  font={isActive ? 'font-semibold' : 'font-medium'}
                  className='cursor-pointer'
                />
                {isActive && (
                  <ChevronRight
                    className='animate-slide-in text-green-300'
                    size={16}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className='border-t border-white/10 pt-3 mt-2'>
          <div className='flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5'>
            <UserCircle className='text-green-400 shrink-0' size={28} />
            <div className='flex flex-col min-w-0'>
              <span className='text-white text-sm font-semibold leading-tight capitalize italic truncate'>
                {username}
              </span>
              <span className='text-white/40 text-xs leading-tight'>Admin</span>
            </div>
          </div>

          <button
            type='button'
            onClick={handleLogout}
            className='mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/75 hover:bg-white/8 hover:text-white transition-all duration-200'
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
