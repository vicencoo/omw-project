import { Home, Phone } from 'lucide-react';
import { locations } from '../../data/locations/locations';
import { useLocations } from './useLocations';
import './locationStyles.css';
import { useTranslation } from 'react-i18next';
import { Text } from '../../components/Text';

export const Locations = () => {
  const { activeId, setActiveId, mapRef } = useLocations(locations);
  const activeLoc = locations.find((l) => l.id === activeId);
  const { t } = useTranslation('locations');

  return (
    <div className='w-full font-sans flex flex-col'>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap'); `}</style>

      {/* ── Top Bar ── */}
      <div className='z-10 flex shrink-0 items-center justify-between border-b border-green-900/10 bg-white/70 px-4 sm:px-5 py-3 backdrop-blur-sm'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-green-600'>
            <Home className='text-white' size={17} />
          </div>
          <div>
            <h1 className='m-0 font-["DM_Serif_Display"] text-[18px] sm:text-[20px] leading-none text-gray-900'>
              <em className='text-green-500'>{t('header.title')}</em>
            </h1>
            <p className='mt-0.75 text-[10px] sm:text-[11px] text-green-700/70'>
              {t('header.country')} &nbsp;·&nbsp; {locations.length}{' '}
              {t('header.points')}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-1.5 rounded-full border border-green-200 bg-white px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-[11px] text-green-600 shadow-sm'>
          <span className='inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse' />
          <span className='hidden sm:inline'>{t('header.desc')}</span>
          <span className='sm:hidden'>{t('header.descShort')}</span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className='omw-body'>
        {/* Sidebar — below map on mobile, left on desktop (via order:-1 CSS) */}
        <div className='omw-sidebar'>
          <div className='flex flex-col gap-2 p-3 pb-2'>
            {locations.map((loc, i) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(activeId === loc.id ? null : loc.id)}
                className={`slide-in d${i + 1} block w-full rounded-[14px] border p-3.5 text-left transition-all duration-200 md:hover:translate-x-0.75 active:scale-[0.99] cursor-pointer ${
                  activeId === loc.id
                    ? 'border-green-400 bg-green-50'
                    : 'border-green-100 bg-white hover:bg-green-50'
                }`}
              >
                <div className='mb-2.5 flex items-start justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${activeId === loc.id ? 'bg-green-600' : 'bg-green-100'}`}
                    >
                      <span
                        className={`text-[11px] font-semibold ${activeId === loc.id ? 'text-white' : 'text-green-600'}`}
                      >
                        {loc.id < 10 ? `0${loc.id} ` : loc.id}
                      </span>
                    </div>

                    <div className='text-[13px] font-semibold leading-[1.2] text-gray-900'>
                      {loc.name}
                    </div>
                  </div>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    strokeWidth='2'
                    className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${activeId === loc.id ? 'stroke-green-500' : 'stroke-green-300'}`}
                  >
                    <path d='M9 18l6-6-6-6' />
                  </svg>
                </div>

                <div className='mb-2.5 flex items-start gap-1.5 text-[11px] text-green-700/60'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    className='mt-px h-3 w-3 shrink-0 text-green-500/70'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                  <span>{loc.address}</span>
                </div>

                {activeId === loc.id && (
                  <div className='fade-up mt-3 flex items-center justify-between border-t border-green-100 pt-3'>
                    <div className='flex items-center gap-1.5 text-xs text-green-600'>
                      <Phone size={13} />
                      {loc.phone}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <Text
            text={t('selectStation')}
            size='text-xs'
            className='text-green-700/60 py-4 text-center'
          />
        </div>

        {/* Map */}
        <div className='omw-map-wrap'>
          <div ref={mapRef} className='h-full w-full' />

          {/* Desktop pill */}
          {activeLoc && (
            <div className='fade-up absolute bottom-6 left-1/2 z-1000 -translate-x-1/2 flex items-center gap-4 whitespace-nowrap rounded-2xl border border-green-200 bg-white px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.12)]'>
              <div className='relative h-2.5 w-2.5'>
                <span className='absolute inset-0 block rounded-full bg-green-500' />
                <span className='absolute inset-0 block rounded-full bg-green-500 animate-ping opacity-75' />
              </div>
              <div>
                <div className='text-[13px] font-semibold text-gray-900'>
                  {activeLoc.name}
                </div>
                <div className='mt-0.5 text-[11px] text-green-700/70'>
                  {activeLoc.address}
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${activeLoc.lat},${activeLoc.lng}`}
                target='_blank'
                rel='noreferrer'
                className='ml-1.5 rounded-[10px] bg-green-600 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-green-700'
              >
                {t('getDirections')}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
