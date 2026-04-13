export const ManagePricesSkeleton = ({ count = 6 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className='bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm animate-pulse'
        >
          <div className='flex items-center gap-3 px-5 py-4 border-b border-gray-100'>
            <div className='w-9 h-9 rounded-xl bg-slate-200 shrink-0' />

            <div className='flex flex-col gap-2'>
              <div className='h-4 w-24 rounded bg-slate-200' />
              <div className='h-3 w-20 rounded bg-slate-100' />
            </div>
          </div>

          <div className='px-5 py-3 flex flex-col gap-2'>
            {Array.from({ length: 4 }).map((_, j) => (
              <div
                key={j}
                className='flex items-center justify-between rounded-xl px-4 py-2.5 border border-slate-100 bg-slate-50'
              >
                <div className='flex items-center gap-2.5 w-36'>
                  <div className='w-2 h-2 rounded-full bg-slate-300 shrink-0' />
                  <div className='h-4 w-20 rounded bg-slate-200' />
                </div>

                <div className='flex items-center gap-2 flex-1 justify-center'>
                  <div className='h-6 w-14 rounded bg-slate-300' />
                  <div className='h-3 w-10 rounded bg-slate-200' />
                </div>

                <div className='flex justify-end gap-1'>
                  <div className='w-7 h-7 rounded-lg bg-slate-200' />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
