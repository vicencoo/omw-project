import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';
import { Cards_Info, heroStats } from '../../data/fuels/cardsInfo';
import { HeaderMainCard } from './HeaderMainCard';
import { HeaderMiniCards } from './HeaderMiniCards';

export const HeroSection = ({ t }) => {
  const mainCard = Cards_Info[0];

  return (
    <header className='relative grid md:grid-cols-2 border-b border-slate-200 overflow-hidden '>
      {/* LEFT */}
      <div className='px-8 md:px-12 pt-20 pb-14 flex flex-col gap-6 justify-between'>
        <Reveal>
          <Text
            text={t('hero.subtitle')}
            size='text-xs'
            font='font-semibold'
            className='tracking-[0.22em uppercase text-emerald-600'
          />
        </Reveal>

        <Reveal>
          <Text
            size='text-[clamp(52px,7vw,96px)]'
            font='font-black'
            className='uppercase leading-[0.88] tracking-tight text-slate-900 '
          >
            {t('hero.title1')}
            <br />
            <em className='not-italic text-emerald-600'>{t('hero.title2')}</em>
          </Text>
        </Reveal>

        <Reveal>
          <Text
            text={t('hero.description')}
            size='text-lg'
            font='font-light'
            className='text-slate-500 max-w-md leading-relaxed'
          />
        </Reveal>

        <div className='flex mt-4 border-t border-slate-200 pt-8 w-full justify-between'>
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 border-r lg:pr-28 md:pr-14 pr-10 last:pr-0 last:border-r-0 border-slate-200`}
            >
              <Text
                text={stat.num}
                size='md:text-3xl sm:text:2xl text-xl'
                font='font-extrabold'
                className='text-slate-900 leading-none text-nowrap'
              />

              <Text
                text={t(`hero.stats.${stat.label}`)}
                size='text-[11px]'
                font='font-normal'
                className='uppercase text-slate-500 tracking-wide'
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className='relative  border-l border-slate-200 flex flex-col justify-center px-9 py-8 gap-3 overflow-hidden'>
        <div
          className='absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(22,163,74,0.08) 0%, transparent 65%)',
          }}
        />

        <Text
          size='text-[9px]'
          font='font-semibold'
          className='tracking-[0.2em] uppercase text-slate-400 flex items-center gap-1.5'
        >
          <span className='inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
          {t('hero.products.title')}
        </Text>

        {/* Featured — Crystal Diesel */}
        <Reveal>
          <HeaderMainCard mainCard={mainCard} t={t} />
        </Reveal>

        {/* Mini Cards */}
        <Reveal>
          <div className='grid grid-cols-3 gap-2.5'>
            {Cards_Info.slice(1).map((item) => (
              <HeaderMiniCards key={item.id} item={item} t={t} />
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
};
