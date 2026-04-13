import { useTranslation } from 'react-i18next';
import { Text } from '../../components/Text';
import { formatDateTime } from '../../utils/formatDateTime';
import { Reveal } from '../../components/Reveal';

// const fuelColors = {
//   'euro diesel': '#c17d2e',
//   'crystal diesel': '#378ADD',
//   petrol: '#D85A30',
//   lpg: '#1D9E75',
// };

const fuelColors = {
  'euro diesel': '#1218c3',
  'crystal diesel': '#e26600',
  petrol: '#16bc10',
  lpg: '#fa1111',
};

export const StationPriceCard = ({ s, i }) => {
  const { t } = useTranslation('common');

  return (
    <Reveal>
      <div
        className='
        flex w-full justify-between md:flex-row flex-col
        md:items-center items-start
        px-4 border-t border-slate-100
        bg-transparent hover:bg-slate-50 transition-colors duration-150
        last:border-b last:border-slate-100
      '
      >
        {/* Station info */}
        <div className='flex flex-col justify-center gap-1.5 md:py-8 py-3 md:pr-8 pr-0'>
          <span
            className='text-slate-400 tracking-[.2em] uppercase'
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 11 }}
          >
            — {String(i + 1).padStart(2, '0')}
          </span>

          <h2
            className='font-black italic leading-none text-slate-950 capitalize'
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem,5vw,3.2rem)',
              letterSpacing: '-.03em',
            }}
          >
            {s.city}
          </h2>

          <span
            className='text-slate-500 font-semibold tracking-[.16em] uppercase'
            style={{ fontSize: 11 }}
          >
            {s.area}
          </span>

          <span
            className='text-slate-500 tracking-widest'
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              opacity: 0.65,
            }}
          >
            {t('prices.updated_at')} {formatDateTime(s.last_price_update)}
          </span>
        </div>

        {/* Prices */}
        <div className='w-full md:w-auto flex flex-wrap md:flex-nowrap items-stretch'>
          {s.station_prices.map((price) => (
            <div
              key={price.id}
              className='
              w-1/2 md:w-auto
              flex flex-col md:items-end items-start justify-between
              border-t md:border-t-0 md:border-l border-r-0 md:border-r last:border-r-0 border-slate-100
              gap-2
            '
              style={{
                padding:
                  window.innerWidth < 768 ? '1rem 0.75rem' : '1.75rem 1.5rem',
              }}
            >
              <span
                className='text-slate-400 tracking-[.18em] uppercase whitespace-nowrap'
                style={{ fontFamily: "'DM Mono', monospace", fontSize: 10 }}
              >
                {price.fuel}
              </span>

              <Text
                text={price.price}
                size='text-[clamp(1.4rem,6vw,3rem)] md:text-[clamp(2rem,3.5vw,3rem)]'
                font='font-bold font-serif'
                className='italic leading-none text-slate-950'
              />

              <Text
                text='all / l'
                size='text-[9px]'
                className='uppercase tracking-[.16em]'
              />

              <div
                className='w-full h-0.75 mt-1'
                style={{
                  background: fuelColors[price.fuel],
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};
