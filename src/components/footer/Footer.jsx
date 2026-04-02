import { Link, useNavigate } from 'react-router-dom';
import { FooterItems } from '../../constants/footer';
import { Text } from '../text';
import { Icon } from '../icon/Icon';
import { Contact_Info } from '../../data/contact/contactInfo';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='w-full border-t border-green-200 bg-white'>
      <div className='container pt-12 md:pt-16'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12'>
          {/* Brand */}
          <div className='flex flex-col gap-5 max-w-sm'>
            <button
              onClick={() => navigate('/')}
              className='group flex w-fit items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2'
            >
              <span className='font-serif text-lg font-semibold tracking-[0.2em] text-green-700'>
                OMW
              </span>
            </button>

            <Text
              text='Kujdesemi për automjetin tuaj me karburant cilësor dhe shërbim të shpejtë. Prezentë kudo në Shqipëri.'
              className='leading-6 text-gray-600 tracking-wide'
              size='text-sm'
              font='font-medium'
            />
          </div>

          {/* Company */}
          <div className='flex flex-col gap-5'>
            <Text
              text={'Kompania'}
              size='text-xl'
              font='font-semibold font-serif'
              className='text-gray-900'
            />

            <ul className='flex flex-col gap-3'>
              {FooterItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path || '#'}
                    className='w-fit text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-green-600  rounded-md tracking-wider'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='flex flex-col gap-5'>
            <Text
              text={'Kontakt'}
              size='text-xl'
              font='font-semibold font-serif'
              className='text-gray-900'
            />

            <ul className='flex flex-col gap-4'>
              {Contact_Info.map((info) => (
                <li key={info.id} className='flex items-center gap-2'>
                  <Icon
                    icon={info.icon}
                    size='xs'
                    className={'text-green-600'}
                  />
                  <Text
                    text={info.text}
                    className='leading-6 text-gray-600'
                    font='font-medium'
                    size='text-sm'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-10 flex flex-col gap-3 border-t border-green-200 py-8 md:flex-row md:items-center md:justify-between'>
          <Text
            size='text-sm'
            font='font-medium'
            className='tracking-wide text-gray-500'
            text='© OMW. Të gjitha të drejtat e rezervuara.'
          />

          <div className='flex items-center gap-4 text-sm text-gray-500'>
            <span className='hover:text-green-600 transition-colors cursor-pointer'>
              Privacy Policy
            </span>
            <span className='h-4 w-px bg-gray-300' />
            <span className='hover:text-green-600 transition-colors cursor-pointer'>
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
