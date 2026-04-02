import { useNavigate } from 'react-router-dom';
import { FUELS } from '../../data/fuels/fuels';
import { ProductCard } from './ProductCard';
import { HeaderMainCard } from './HeaderMainCard';
import { Cards_Info } from '../../data/fuels/cardsInfo';
import { Text } from '../../components/text/Text';
import { Reveal } from '../../components/reveal/Reveal';

export const Products = () => {
  const navigate = useNavigate();
  const mainCard = Cards_Info[0];
  return (
    <div className='min-h-screen text-slate-900'>
      {/* ── Kreu ── */}
      <Reveal>
        <header className='relative grid md:grid-cols-2 border-b border-slate-200 overflow-hidden '>
          {/* LEFT */}
          <div className='px-8 md:px-12 pt-20 pb-14 flex flex-col gap-6 justify-between'>
            <Reveal>
              <Text
                text={'Gama Jonë e Produkteve'}
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
                Zgjidhje
                <br />
                <em className='not-italic text-emerald-600'>Karburanti</em>
              </Text>
            </Reveal>

            <Reveal>
              <Text
                text={` Nga benzina me performancë të lartë deri te GNL me djegie të
              pastër — të rafinuara me precizion për çdo motor, çdo industri.`}
                size='text-lg'
                font='font-light'
                className='text-slate-500 max-w-md leading-relaxed'
              />
            </Reveal>

            <div className='flex mt-4 border-t border-slate-200 pt-8 w-full justify-between'>
              {[
                { num: '4', label: 'Produkte' },
                { num: 'Euro 6', label: 'Në Përputhje' },
                { num: '24/7', label: 'Shpërndarje' },
              ].map((stat, i) => (
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
                    text={stat.label}
                    size='text-[9px]'
                    font='font-light'
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
              Produktet Tona
            </Text>

            {/* Featured — Crystal Diesel */}
            <Reveal>
              <HeaderMainCard mainCard={mainCard} />
            </Reveal>

            {/* Mini Cards */}
            <Reveal>
              <div className='grid grid-cols-3 gap-2.5'>
                {Cards_Info.slice(1).map((item) => (
                  <div
                    key={item.id}
                    className={`group relative flex flex-col gap-1.5 bg-white border border-slate-200 p-3 overflow-hidden transition-all duration-200 ${item.hoverBg} ${item.hoverBorder}`}
                  >
                    <div
                      className={`absolute ${item.lineBg} bottom-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                    />
                    {/* <p className='text-[8px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-1'>
                  {item.cat}
                </p> */}
                    <Text
                      text={item.cat}
                      size='text-[8px]'
                      font='font-semibold'
                      className='tracking-[0.15em] uppercase text-slate-500'
                    />
                    <Text
                      text={item.name}
                      size='text-xs'
                      font='font-black'
                      className='uppercase text-slate-900 leading-tight'
                    />

                    {item.spec.map((spec, i) => (
                      <Text
                        key={i}
                        text={spec.val}
                        size='text-sm'
                        font='font-bold'
                        className={`leading-none ${item.color}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </header>
      </Reveal>

      {/* ── Seksioni i Produkteve ── */}
      <div className='container py-14'>
        <Reveal>
          <div className='mb-10 flex items-end justify-between'>
            <div className='flex flex-col gap-2'>
              <Text
                text={' Të gjitha produktet'}
                size='text-[10px]'
                font='font-semibold'
                className='tracking-[0.22em] uppercase text-emerald-600'
              />
              <Text
                text={'Karburantet Tona'}
                size='md:text-5xl sm:text-4xl text-3xl'
                font='font-black'
                className='uppercase tracking-tight text-slate-900 leading-none'
              />
            </div>

            <Text
              text={' Cilësia dhe besueshmëria në çdo pikë karburanti.'}
              size='text-sm'
              font='font-normal'
              className='text-slate-400 max-w-xs text-right leading-relaxed hidden md:block'
            />
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal>
          <div className='grid grid-cols-12 gap-px bg-slate-200 border border-slate-200'>
            {FUELS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Footer ── */}
      <Reveal>
        <footer className='px-8 md:px-16 py-8 border-t border-slate-300 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <Text
            text={`Shitje me shumicë dhe pakicë , gjithashtu shpërndarje me porosi të
          disponueshme në të gjithë vendin`}
            size='text-sm'
            font='font-medium font-serif'
            className='tracking-wide text-slate-600'
          />
          <button
            className='text-xs font-bold tracking-[0.18em] uppercase px-7 py-3 bg-transparent border border-slate-400 text-slate-600 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600'
            onClick={() => navigate('/contact')}
          >
            Kontakto Shitjet →
          </button>
        </footer>
      </Reveal>
    </div>
  );
};
