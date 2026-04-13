import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';

export const StorySection = ({ t }) => {
  return (
    <section className='bg-white py-24 md:py-32'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          {/* Text side */}
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'>
              <div className='h-px w-10 bg-amber-400' />

              <Text
                text={t('story.subtitle')}
                size='text-sm'
                font='font-medium'
                className='tracking-widest uppercase text-amber-600'
              />
            </div>

            <Reveal>
              <Text
                text={t('story.title')}
                size='text-3xl md:text-5xl'
                font='font-serif'
                className='text-green-950 leading-tight'
              />
            </Reveal>

            {/* Pull quote */}
            <Reveal>
              <blockquote className='border-l-4 border-amber-400 pl-6 '>
                <Text
                  text={t('story.mission')}
                  size='text-xl md:text-2xl'
                  font='font-serif'
                  className='text-green-800 italic leading-snug'
                />
              </blockquote>
            </Reveal>

            <Reveal className='flex flex-col gap-4'>
              <Text
                text={t('story.text1')}
                size='text-lg'
                className='text-gray-600 leading-relaxed'
              />
              <Text
                text={t('story.text2')}
                size='text-lg'
                className='text-gray-600 leading-relaxed'
              />
            </Reveal>
          </div>

          {/* Image side */}
          <Reveal>
            <div className='relative'>
              {/* Decorative frame offset */}
              <div className='absolute -top-4 -right-4 w-full h-full border-2 border-amber-400 rounded-2xl' />
              <img
                src='/images/gas_station_aboutus.avif'
                alt='Kompania jonë'
                className='relative rounded-2xl object-cover w-full aspect-4/5 shadow-xl'
              />
              {/* Year badge */}
              <div className='absolute md:-bottom-6 -bottom-8 md:-left-6 -left-4 bg-green-950 text-white px-6 py-4 rounded-xl shadow-lg'>
                <span className='block text-3xl font-serif font-bold text-amber-400'>
                  2013
                </span>
                <span className='text-xs text-green-400 uppercase tracking-wider'>
                  {t('story.established')}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
