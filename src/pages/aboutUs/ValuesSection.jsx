import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';
import { values } from '../../data/aboutUs';

export const ValuesSection = ({ t }) => {
  return (
    <section className='bg-white py-24 md:py-32'>
      <div className='container mx-auto px-6 md:px-12'>
        <Reveal>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3 '>
                <div className='h-px w-10 bg-amber-400' />
                <span className='text-amber-600 text-sm font-medium tracking-widest uppercase'>
                  {t('values.subtitle')}
                </span>
              </div>

              <Text
                text={t('values.title')}
                size='text-3xl md:text-5xl'
                font='font-serif'
                className='text-green-950 leading-tight'
              />
            </div>

            <Text
              text={t('values.description')}
              className='text-gray-500 max-w-xs md:text-right leading-relaxed'
            />
          </div>
        </Reveal>

        {/* Value cards */}

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {values.map((v, i) => (
            <Reveal key={i}>
              <div className='group relative bg-green-50 hover:bg-green-950 rounded-2xl p-8 transition-colors duration-300 overflow-hidden'>
                <span className='absolute top-4 right-5 text-6xl font-serif font-bold text-green-100 group-hover:text-green-900 select-none transition-colors duration-300'>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className='text-3xl block mb-6'>{v.icon}</span>

                <Text
                  text={t(v.title)}
                  size='text-xl'
                  font='font-serif font-bold'
                  className='text-green-900 group-hover:text-amber-400 transition-colors duration-300'
                />

                <Text
                  text={t(v.desc)}
                  size='text-sm'
                  className='text-gray-600 group-hover:text-green-300 leading-relaxed transition-colors duration-300'
                />

                {/* Bottom accent */}
                <div className='mt-8 h-0.5 w-10 bg-amber-400 group-hover:w-full transition-all duration-500' />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
