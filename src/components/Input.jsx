import { Text } from './Text';

export const Input = ({ label, placeholder, multiline = false, className }) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
      {label && (
        <Text
          text={label}
          size='text-xs'
          font='font-semibold'
          className='text-[#7aaa8a] uppercase tracking-wider'
        />
      )}
      {multiline ? (
        <textarea
          rows={6}
          className={`
    bg-white border-[1.5px] rounded-md border-gray-300 text-gray-800
    px-4 py-3 text-sm outline-none transition-all duration-200
    focus:border-green-500 focus:ring-4 focus:ring-green-500/10
    placeholder:text-[rgba(122,170,138,0.5)]
   ${className}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`
    bg-white border-[1.5px] rounded-md border-gray-300 text-gray-800
    px-4 py-3 text-sm outline-none transition-all duration-200
    focus:border-green-500 focus:ring-4 focus:ring-green-500/10
    placeholder:text-[rgba(122,170,138,0.5)]
   ${className}`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
