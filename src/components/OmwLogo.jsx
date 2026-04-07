import { useNavigate } from 'react-router-dom';

export const OmwLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      className='px-4 py-2 bg-[#2f971f] rounded-2xl text-white cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
      onClick={() => navigate('/')}
    >
      <span
        className='
              text-[18px]
              font-extrabold
              leading-none
              tracking-tight
              [text-shadow:0_0_4px_rgba(255,255,255,0.45)]
            '
      >
        OMW
      </span>
    </div>
  );
};
