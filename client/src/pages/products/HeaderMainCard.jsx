export const HeaderMainCard = ({ mainCard, t }) => {
  return (
    <div
      className={`group relative bg-white border border-slate-200 p-5 overflow-hidden transition-all duration-300 ${mainCard.hoverBorder} ${mainCard.hoverBg}`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${mainCard.lineBg} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
      />
      <div className='flex justify-between items-start mb-3'>
        <span className='text-[9px] font-bold tracking-[0.18em] uppercase text-slate-400'>
          {t(mainCard.cat)}
        </span>
        <div className='flex items-center gap-2'>
          <span
            className={`text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-1 bg-amber-50 border border-amber-500 ${mainCard.color}`}
          >
            Premium
          </span>
        </div>
      </div>
      <h3 className='font-black text-2xl uppercase tracking-tight text-slate-900 leading-none mb-2'>
        {t(mainCard.name)}
      </h3>
      <p className='text-sm font-sans font-normal text-slate-400 leading-relaxed mb-4 max-w-xs'>
        {t(mainCard.text)}
      </p>
    </div>
  );
};
