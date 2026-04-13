import { useState } from 'react';
import { StationPriceCard } from './StationPriceCard';
import { useTranslation } from 'react-i18next';
import { fuels } from '../../constants/pricesFuels';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { usePrices } from './usePrices';

export const Prices = () => {
  const { t } = useTranslation('common');
  const { stations, changeStationPrice, changeValue, station, submitStation } =
    usePrices();

  const [now] = useState(new Date());
  const dateStr = now.toLocaleDateString('sq-AL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div
      className='min-h-screen pb-16 container'
      style={{
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Top bar */}
      <div className='flex items-center justify-between flex-wrap gap-2 md:my-10 my-6'>
        <div className='inline-flex items-center gap-1.5 border border-slate-200 rounded-full px-3 py-1.5'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse' />
          <span
            className='text-slate-400'
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
            }}
          >
            {t('prices.header_live')}
          </span>
        </div>
        <span
          className='text-slate-400'
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: 10,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
          }}
        >
          {dateStr}
        </span>
      </div>

      {/* Hero */}
      <div className='mb-12'>
        <div
          className='mb-4'
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: 10,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: '#c17d2e',
          }}
        >
          {` ${t('prices.header_country')} · ${t('prices.header_oil')} · ${year}`}
        </div>

        <h1
          className='text-slate-950 font-extrabold leading-none mb-6'
          style={{
            fontSize: 'clamp(3rem,10vw,6.5rem)',
            letterSpacing: '-.055em',
            lineHeight: 1.1,
          }}
        >
          {t('prices.header_text_1')}
          <br />
          {t('prices.header_text_2')}
          <br />
          {t('prices.header_text_3')}{' '}
          <span style={{ color: '#c17d2e' }}>.</span>
        </h1>

        {/*  */}
        <div className='flex flex-col gap-3'>
          <Input
            value={station.city}
            onChange={(e) => changeValue('city', e.target.value)}
          />
          <Input
            value={station.area}
            onChange={(e) => changeValue('area', e.target.value)}
          />
          <div className='grid grid-cols-2 gap-4'>
            {station.station_prices.map((sp, i) => (
              <div key={i} className='flex items-center gap-2 mb-2'>
                <Input
                  value={sp.fuel}
                  onChange={(e) =>
                    changeStationPrice(i, 'fuel', e.target.value)
                  }
                />
                <Input
                  value={sp.price}
                  onChange={(e) =>
                    changeStationPrice(i, 'price', e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <Button name={'submit station'} onClick={submitStation} />
        </div>
        {/*  */}

        {/* Legend chips */}
        <div className='flex flex-wrap md:gap-3 gap-1'>
          {fuels.map((f) => (
            <div
              key={f.key}
              className='inline-flex items-center gap-1.5 border border-slate-100 rounded-lg'
              style={{ padding: '5px 10px' }}
            >
              <span
                className='rounded-full shrink-0 w-2 h-2'
                style={{
                  background: f.color,
                }}
              />
              <span
                className='text-slate-500'
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Station rows */}
      <div className='flex flex-col md:gap-0 gap-5'>
        {stations &&
          stations.map((s, i) => <StationPriceCard s={s} i={i} key={s.id} />)}
      </div>
    </div>
  );
};
