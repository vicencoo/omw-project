import { Text } from '../../components/text/Text';

export const ProductCard = ({ product }) => {
  return (
    <div
      className={`group relative col-span-12 ${product.span} bg-white ${product.cardHoverBg} border-b-[3px] border-transparent ${product.cardHoverBorder} min-h-105 flex flex-col overflow-hidden transition-all duration-400`}
    >
      <div className='relative overflow-hidden h-55'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
        />

        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${product.overlayGradient}`}
        />

        {product.badge && (
          <span
            className={`absolute top-4 left-8 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 border ${product.badgeBg} ${product.badgeBorder} ${product.badgeText}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className='flex flex-col flex-1 p-7'>
        <div
          className={`w-8 group-hover:w-12 h-0.5 mb-4 ${product.accentBg} transition-all duration-500`}
        />

        <Text
          text={product.name}
          size='md:text-5xl text-3xl'
          font='font-black'
          className='uppercase tracking-tight leading-none text-slate-900 mb-3'
        />

        <Text
          text={product.description}
          size='text-sm'
          font='font-light'
          className='text-slate-500 leading-relaxed mb-6 flex-1'
        />

        <div
          className={`flex gap-5 flex-wrap pb-5 mb-5 border-b ${product.accentBorder}`}
        >
          {product.specs.map((s, i) => (
            <div key={i} className='flex flex-col gap-0.5'>
              <Text
                text={s.val}
                size='text-xl'
                font='font-bold'
                className={`${product.accentTextStrong} leading-none`}
              />
              <Text
                text={s.label}
                size='text-[10px]'
                font='font-light'
                className={`tracking-widest uppercase text-slate-400`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
