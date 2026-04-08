// import { useState } from 'react';

// const stations = [
//   {
//     id: 1,
//     city: 'Tiranë',
//     area: 'Rruga e Kavajës',
//     time: '09:12',
//     prices: { diesel: 265, premiumDiesel: 280, petrol: 248, lpg: 115 },
//   },
//   {
//     id: 2,
//     city: 'Tiranë',
//     area: 'Bulevardi Zogu I',
//     time: '09:05',
//     prices: { diesel: 265, premiumDiesel: 280, petrol: 248, lpg: 115 },
//   },
//   {
//     id: 3,
//     city: 'Vorë',
//     area: 'Rruga Nacionale',
//     time: '08:58',
//     prices: { diesel: 264, premiumDiesel: 279, petrol: 247, lpg: 114 },
//   },
//   {
//     id: 4,
//     city: 'Përmet',
//     area: 'Qendra e Qytetit',
//     time: '09:20',
//     prices: { diesel: 266, premiumDiesel: 281, petrol: 249, lpg: 116 },
//   },
//   {
//     id: 5,
//     city: 'Orikum',
//     area: 'Rruga Bregdetare',
//     time: '08:42',
//     prices: { diesel: 267, premiumDiesel: 282, petrol: 250, lpg: 117 },
//   },
// ];

// const fuels = [
//   { key: 'diesel', label: 'Naftë', color: '#c17d2e' },
//   { key: 'premiumDiesel', label: 'Naftë Premium', color: '#378ADD' },
//   { key: 'petrol', label: 'Benzinë', color: '#D85A30' },
//   { key: 'lpg', label: 'Gaz', color: '#1D9E75' },
// ];

// function getRanges() {
//   const ranges = {};
//   fuels.forEach((f) => {
//     const vals = stations.map((s) => s.prices[f.key]);
//     ranges[f.key] = { min: Math.min(...vals), max: Math.max(...vals) };
//   });
//   return ranges;
// }

// function getBarPct(key, val, ranges) {
//   const r = ranges[key];
//   if (r.max === r.min) return 60;
//   return Math.round(40 + ((val - r.min) / (r.max - r.min)) * 55);
// }

// function PriceCell({ fuel, value, pct }) {
//   return (
//     <td className='px-3 py-5 text-right align-top'>
//       <div className='inline-flex flex-col items-end gap-0.5'>
//         <span
//           className='text-2xl font-extrabold leading-none tracking-tight'
//           style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.04em' }}
//         >
//           {value}
//         </span>
//         <span
//           className='text-[9px] uppercase tracking-widest text-slate-400'
//           style={{ fontFamily: "'Syne Mono', monospace" }}
//         >
//           ALL/L
//         </span>
//         <div className='relative mt-1 h-[2px] w-12 overflow-hidden rounded-full bg-slate-200'>
//           <div
//             className='absolute left-0 top-0 h-full rounded-full'
//             style={{ width: `${pct}%`, background: fuel.color }}
//           />
//         </div>
//       </div>
//     </td>
//   );
// }

// export const Prices = () => {
//   const [hovered, setHovered] = useState(null);
//   const ranges = getRanges();

//   return (
//     <div
//       className='min-h-screen py-8 container'
//       style={{ fontFamily: "'Syne', sans-serif" }}
//     >
//       {/* Masthead */}
//       <div className='mb-8 flex items-start justify-between gap-4 border-b border-slate-200 pb-6'>
//         <div>
//           <p
//             className='mb-1 text-[11px] uppercase tracking-[.2em] text-slate-400'
//             style={{ fontFamily: "'Syne Mono', monospace" }}
//           >
//             Çmimet e karburantit
//           </p>
//           <h1
//             className='text-[2.4rem] font-extrabold leading-none tracking-tight text-slate-950'
//             style={{ letterSpacing: '-0.04em' }}
//           >
//             Fuel<span style={{ color: '#c17d2e' }}>AL</span>
//           </h1>
//         </div>
//         <div className='text-right'>
//           <div
//             className='flex items-center justify-end gap-1.5 text-[11px] uppercase tracking-widest text-slate-400'
//             style={{ fontFamily: "'Syne Mono', monospace" }}
//           >
//             <span className='inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-600' />
//             Live · Shqipëri
//           </div>
//           <div className='mt-2 flex flex-wrap justify-end gap-3'>
//             {fuels.map((f) => (
//               <span
//                 key={f.key}
//                 className='flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-500'
//                 style={{ fontFamily: "'Syne Mono', monospace" }}
//               >
//                 <span
//                   className='inline-block h-[3px] w-5 rounded'
//                   style={{ background: f.color }}
//                 />
//                 {f.label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className='overflow-x-auto'>
//         <table className='w-full min-w-[520px] border-collapse'>
//           <thead>
//             <tr>
//               <th
//                 className='pb-4 pl-3 pr-3 text-left text-[10px] font-normal uppercase tracking-[.18em] text-slate-400'
//                 style={{ fontFamily: "'Syne Mono', monospace" }}
//               >
//                 Stacioni
//               </th>
//               {fuels.map((f) => (
//                 <th
//                   key={f.key}
//                   className='pb-4 pr-3 text-right text-[10px] font-normal uppercase tracking-[.18em] text-slate-400'
//                   style={{ fontFamily: "'Syne Mono', monospace" }}
//                 >
//                   {f.label}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {stations.map((s, i) => (
//               <tr
//                 key={s.id}
//                 className={`border-t border-slate-100 transition-colors duration-150 ${
//                   i === stations.length - 1 ? '' : ''
//                 } ${hovered === s.id ? 'bg-slate-50' : ''}`}
//                 onMouseEnter={() => setHovered(s.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <td className='py-5 pl-3 pr-3 align-top'>
//                   <div
//                     className='text-[10px] uppercase tracking-widest text-slate-400'
//                     style={{ fontFamily: "'Syne Mono', monospace" }}
//                   >
//                     Station {String(i + 1).padStart(2, '0')}
//                   </div>
//                   <div
//                     className='mt-1 text-[1.05rem] font-bold leading-tight text-slate-950'
//                     style={{ letterSpacing: '-0.02em' }}
//                   >
//                     {s.city}
//                   </div>
//                   <div
//                     className='mt-0.5 text-[.75rem] text-slate-500'
//                     style={{ fontFamily: "'Syne Mono', monospace" }}
//                   >
//                     {s.area}
//                   </div>
//                   <div
//                     className='mt-1 text-[.65rem] tracking-wide text-slate-300'
//                     style={{ fontFamily: "'Syne Mono', monospace" }}
//                   >
//                     Sot · {s.time}
//                   </div>
//                 </td>
//                 {fuels.map((f) => (
//                   <PriceCell
//                     key={f.key}
//                     fuel={f}
//                     value={s.prices[f.key]}
//                     pct={getBarPct(f.key, s.prices[f.key], ranges)}
//                   />
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

import { useState } from 'react';

const stations = [
  {
    id: 1,
    city: 'Tiranë',
    area: 'Rruga e Kavajës',
    time: '09:12',
    prices: { diesel: 265, premiumDiesel: 280, petrol: 248, lpg: 115 },
  },
  {
    id: 2,
    city: 'Tiranë',
    area: 'Bulevardi Zogu I',
    time: '09:05',
    prices: { diesel: 265, premiumDiesel: 280, petrol: 248, lpg: 115 },
  },
  {
    id: 3,
    city: 'Vorë',
    area: 'Rruga Nacionale',
    time: '08:58',
    prices: { diesel: 264, premiumDiesel: 279, petrol: 247, lpg: 114 },
  },
  {
    id: 4,
    city: 'Përmet',
    area: 'Qendra e Qytetit',
    time: '09:20',
    prices: { diesel: 266, premiumDiesel: 281, petrol: 249, lpg: 116 },
  },
  {
    id: 5,
    city: 'Orikum',
    area: 'Rruga Bregdetare',
    time: '08:42',
    prices: { diesel: 267, premiumDiesel: 282, petrol: 250, lpg: 117 },
  },
];

const fuels = [
  { key: 'diesel', label: 'Naftë', color: '#c17d2e' },
  { key: 'premiumDiesel', label: 'Naftë Premium', color: '#378ADD' },
  { key: 'petrol', label: 'Benzinë', color: '#D85A30' },
  { key: 'lpg', label: 'Gaz', color: '#1D9E75' },
];

function getRanges() {
  const r = {};
  fuels.forEach((f) => {
    const vals = stations.map((s) => s.prices[f.key]);
    r[f.key] = { min: Math.min(...vals), max: Math.max(...vals) };
  });
  return r;
}

function getBarPct(key, val, ranges) {
  const r = ranges[key];
  if (r.max === r.min) return 55;
  return Math.round(30 + ((val - r.min) / (r.max - r.min)) * 65);
}

function PriceCell({ fuel, value, pct }) {
  return (
    <div
      className='flex flex-col items-end justify-center border-l border-slate-100 px-4 py-6'
      style={{ minWidth: 80 }}
    >
      <span
        className='mb-1 text-[9px] uppercase tracking-[.16em] text-slate-400'
        style={{ fontFamily: "'Syne Mono', monospace" }}
      >
        {fuel.label}
      </span>
      <span
        className='text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-none text-slate-950'
        style={{ letterSpacing: '-0.04em' }}
      >
        {value}
      </span>
      <span
        className='mt-0.5 text-[9px] uppercase tracking-[.1em] text-slate-400'
        style={{ fontFamily: "'Syne Mono', monospace" }}
      >
        ALL/L
      </span>
      <div className='mt-2 h-[2px] w-full overflow-hidden rounded-full bg-slate-100'>
        <div
          className='h-full rounded-full transition-all duration-500'
          style={{ width: `${pct}%`, background: fuel.color }}
        />
      </div>
    </div>
  );
}

export const Prices = () => {
  const [hovered, setHovered] = useState(null);
  const ranges = getRanges();

  const now = new Date();
  const dateStr = now.toLocaleDateString('sq-AL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className='container min-h-screen py-10 pb-16'
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Hero */}
      <div className='mb-14'>
        <div className='mb-6 flex items-center justify-between gap-4 flex-wrap'>
          <div className='flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5'>
            <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-green-700' />
            <span
              className='text-[11px] uppercase tracking-[.14em] text-slate-500'
              style={{ fontFamily: "'Syne Mono', monospace" }}
            >
              Live now
            </span>
          </div>
          <span
            className='text-[11px] uppercase tracking-[.14em] text-slate-400'
            style={{ fontFamily: "'Syne Mono', monospace" }}
          >
            {dateStr}
          </span>
        </div>

        <h1
          className='text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[.92] text-slate-950'
          style={{ letterSpacing: '-0.05em' }}
        >
          Çmimet e<br />
          karburantit
          <br />
          në{' '}
          <em className='not-italic' style={{ color: '#c17d2e' }}>
            Shqipëri.
          </em>
        </h1>

        <div className='mt-5 flex flex-wrap items-center gap-6'>
          <p
            className='text-[12px] uppercase tracking-[.12em] text-slate-400'
            style={{ fontFamily: "'Syne Mono', monospace", lineHeight: 1.7 }}
          >
            5 stacione · çmime në kohë reale · ALL për litër
          </p>
          <div className='flex flex-wrap gap-4'>
            {fuels.map((f) => (
              <span
                key={f.key}
                className='flex items-center gap-1.5 text-[10px] uppercase tracking-[.14em] text-slate-500'
                style={{ fontFamily: "'Syne Mono', monospace" }}
              >
                <span
                  className='inline-block h-[3px] w-5 rounded'
                  style={{ background: f.color }}
                />
                {f.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-8 h-px bg-slate-200' />

      {/* Station rows */}
      <div className='flex flex-col'>
        {stations.map((s, i) => (
          <div
            key={s.id}
            className={`border-t border-slate-100 transition-colors duration-150 ${
              i === stations.length - 1 ? 'border-b border-slate-100' : ''
            } ${hovered === s.id ? 'bg-slate-50' : ''}`}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className='grid grid-cols-[1fr_auto] items-stretch'>
              {/* Station info */}
              <div className='flex flex-col justify-center py-7 pr-4'>
                <div
                  className='mb-2 text-[10px] uppercase tracking-[.2em] text-slate-400'
                  style={{ fontFamily: "'Syne Mono', monospace" }}
                >
                  — {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className='text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold leading-none text-slate-950'
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {s.city}
                </div>
                <div
                  className='mt-1.5 text-[11px] uppercase tracking-[.1em] text-slate-500'
                  style={{ fontFamily: "'Syne Mono', monospace" }}
                >
                  {s.area}
                </div>
                <div
                  className='mt-1 text-[10px] tracking-[.1em] text-slate-300'
                  style={{ fontFamily: "'Syne Mono', monospace" }}
                >
                  Përditësuar sot, {s.time}
                </div>
              </div>

              {/* Price cells */}
              <div className='flex items-stretch'>
                {fuels.map((f) => (
                  <PriceCell
                    key={f.key}
                    fuel={f}
                    value={s.prices[f.key]}
                    pct={getBarPct(f.key, s.prices[f.key], ranges)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6'>
        <div
          className='text-[1.4rem] font-extrabold text-slate-950'
          style={{ letterSpacing: '-0.04em' }}
        >
          Fuel<span style={{ color: '#c17d2e' }}>AL</span>
        </div>
        <span
          className='text-[10px] uppercase tracking-[.14em] text-slate-400'
          style={{ fontFamily: "'Syne Mono', monospace" }}
        >
          Të dhënat përditësohen automatikisht
        </span>
      </div>
    </div>
  );
};
