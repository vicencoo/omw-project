import { useNavigate } from 'react-router-dom';

// export const OmwLogo = ({ className }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className={`px-4 py-2 bg-[#2f971f] rounded-2xl text-white cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform ${className}`}
//       onClick={() => navigate('/')}
//     >
//       <span
//         className='
//               text-[18px]
//               font-extrabold
//               leading-none
//               tracking-tight
//               [text-shadow:0_0_4px_rgba(255,255,255,0.45)]
//             '
//       >
//         OMW
//       </span>
//     </div>
//   );
// };

export const OmwLogo = ({ className }) => {
  const navigate = useNavigate();

  return (
    <img
      src='/images/omw-logo.webp'
      alt='OMW'
      onClick={() => navigate('/')}
      className={`
        h-9 w-auto object-contain cursor-pointer select-none
        hover:scale-[1.02] transition-all duration-300 will-change-transform
        ${className || ''}
      `}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(18%) sepia(60%) saturate(600%) hue-rotate(100deg) brightness(0.8)',
      }}
      draggable={false}
    />
  );
};
