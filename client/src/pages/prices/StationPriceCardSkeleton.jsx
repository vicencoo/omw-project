import { Reveal } from '../../components/Reveal';

export const StationPriceCardSkeleton = () => {
  return (
    <Reveal>
      <div
        className='
          flex w-full justify-between md:flex-row flex-col
          md:items-center items-start
          px-4 border-t border-slate-100
          bg-transparent
          last:border-b last:border-slate-100
          animate-pulse
        '
      >
        <div className='flex flex-col justify-center gap-2 md:py-8 py-3 md:pr-8 pr-0 w-full md:w-auto'>
          <div className='h-3 w-10 rounded bg-slate-200' />
          <div className='h-10 w-40 rounded bg-slate-200' />
          <div className='h-3 w-24 rounded bg-slate-200' />
          <div className='h-3 w-36 rounded bg-slate-100' />
        </div>

        <div className='w-full md:w-auto flex flex-wrap md:flex-nowrap items-stretch'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className='
                w-1/2 md:w-auto
                flex flex-col md:items-end items-start justify-between
                border-t md:border-t-0 md:border-l border-r-0 md:border-r last:border-r-0 border-slate-100
                gap-2
                px-3 py-4 md:px-6 md:py-7
              '
            >
              <div className='h-3 w-20 rounded bg-slate-200' />
              <div className='h-10 w-16 rounded bg-slate-300' />
              <div className='h-2 w-12 rounded bg-slate-100' />
              <div className='w-full h-1 rounded bg-slate-200 mt-1' />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};
