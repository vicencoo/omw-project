export const HeaderMainCard = ({ mainCard }) => {
  return (
    <div
      className={`group relative bg-white border border-slate-200 p-5 overflow-hidden transition-all duration-300 ${mainCard.hoverBorder} ${mainCard.hoverBg}`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${mainCard.lineBg} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
      />
      <div className='flex justify-between items-start mb-3'>
        <span className='text-[9px] font-bold tracking-[0.18em] uppercase text-slate-400'>
          {mainCard.cat}
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
        {mainCard.name}
      </h3>
      <p className='text-xs font-light text-slate-400 leading-relaxed mb-4 max-w-xs'>
        {mainCard.text}
      </p>
      <div className='flex gap-5'>
        {mainCard.spec.map((s, i) => (
          <div key={i} className='flex flex-col gap-0.5'>
            <span
              className={`text-base font-bold ${mainCard.color} leading-none`}
            >
              {s.val}
            </span>
            <span className='text-[8px] font-light tracking-widest uppercase text-slate-300'>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
