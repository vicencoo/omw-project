import { Reveal } from '../../components/Reveal';

export const ServiceCard = ({ s, t }) => {
  const tags = t(`offers.${s.tags}`, { returnObjects: true });

  return (
    <Reveal>
      <div
        className={`group relative bg-white border border-green-200 hover:border-amber-400/70 rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300`}
      >
        {/* Large ID watermark */}
        <span className='absolute top-4 right-6 text-7xl font-serif font-bold text-green-100 group-hover:text-green-100 select-none leading-none transition-colors duration-300'>
          {s.id}
        </span>

        {/* Amber top accent line */}
        <div className='absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-500 rounded-t-2xl' />

        <div className='relative z-10'>
          <p className='text-green-500 text-xs uppercase tracking-widest mb-2'>
            {t(`offers.${s.subtitle}`)}
          </p>
          <h3 className='text-xl md:text-2xl font-serif text-green-950 group-hover:text-amber-600 transition-colors duration-300 leading-snug'>
            {t(`offers.${s.title}`)}
          </h3>
        </div>

        <div className='relative z-10 mt-6'>
          <p className='text-green-700 text-sm leading-relaxed group-hover:text-green-800 transition-colors duration-300'>
            {t(`offers.${s.desc}`)}
          </p>
          <div className='mt-5 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-xs px-3 py-1 rounded-full bg-green-50 group-hover:bg-amber-50 text-green-600 group-hover:text-amber-700 border border-green-200 group-hover:border-amber-300 transition-all duration-300'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Corner arrow */}
        <div className='absolute bottom-6 right-6 text-green-300 group-hover:text-amber-400 transition-colors duration-300 text-xl'>
          ↗
        </div>
      </div>
    </Reveal>
  );
};
