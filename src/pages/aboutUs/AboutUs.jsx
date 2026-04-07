import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import { Collaborate } from './Collaborate';
import { ValuesSection } from './ValuesSection';
import { StorySection } from './StorySection';
import { StatsSection } from './StatsSection';
import { ServicesSection } from '../../components/ServicesSection';

export const AboutUs = () => {
  const { t } = useTranslation('about');
  return (
    <div className='flex flex-col'>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className='relative bg-green-950 overflow-hidden min-h-[90vh] flex items-end'>
        {/* Decorative large number */}
        <span className='absolute top-8 right-6 text-[180px] md:text-[260px] font-serif font-bold text-green-900 select-none leading-none pointer-events-none'>
          {'&'}
        </span>

        {/* Amber accent bar */}
        <div className='absolute top-0 left-0 w-1.5 h-full bg-amber-400' />

        <div className='relative z-10 container mx-auto px-6 md:px-12 pb-20 pt-32 flex flex-col gap-8'>
          {/* Eyebrow */}
          <Reveal>
            <div className='flex items-center gap-3 '>
              <div className='h-px w-10 bg-amber-400' />

              <Text
                text={t('heroSubtitle')}
                className='text-amber-400 tracking-widest uppercase'
                size='text-sm'
                font='font-medium'
              />
            </div>
          </Reveal>

          <Reveal>
            <Text
              size='text-5xl md:text-7xl lg:text-8xl'
              font='font-serif'
              className='text-white leading-[1.05] max-w-3xl'
            >
              {t('heroTitle.title1')}
              <br />
              <span className='text-amber-400'>{t('heroTitle.title2')}</span>
              <br />
              {t('heroTitle.title3')}
            </Text>
          </Reveal>

          <Reveal>
            <Text
              text={t('heroText')}
              size='text-lg md:text-xl'
              className='max-w-lg leading-relaxed text-green-300'
            />
          </Reveal>

          {/* Down caret */}
          <Reveal>
            <div className='flex items-center gap-4 pt-3'>
              <div className='w-12 h-12 rounded-full border border-green-700 flex items-center justify-center text-green-400 text-xl'>
                ↓
              </div>

              <Text
                text={t('heroDiscover')}
                size='text-sm'
                className='text-green-500 tracking-wide'
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsSection t={t} />

      <StorySection t={t} />

      <div className='bg-green-50'>
        <ServicesSection />
      </div>

      <ValuesSection t={t} />

      <Reveal>
        <Collaborate t={t} />
      </Reveal>
    </div>
  );
};
