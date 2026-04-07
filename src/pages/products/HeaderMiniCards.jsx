import { Text } from '../../components/Text';

export const HeaderMiniCards = ({ item, t }) => {
  return (
    <div
      className={`group relative flex flex-col gap-1.5 bg-white border border-slate-200 p-3 overflow-hidden transition-all duration-200 ${item.hoverBg} ${item.hoverBorder}`}
    >
      <div
        className={`absolute ${item.lineBg} bottom-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
      />
      <Text
        text={t(item.cat)}
        size='text-[8px]'
        font='font-semibold'
        className='tracking-[0.15em] uppercase text-slate-500'
      />
      <Text
        text={t(item.name)}
        size='text-xs'
        font='font-black'
        className='uppercase text-slate-900 leading-tight'
      />

      {item.spec.map((spec, i) => (
        <Text
          key={i}
          text={spec.val}
          size='text-sm'
          font='font-bold'
          className={`leading-none ${item.color}`}
        />
      ))}
    </div>
  );
};
