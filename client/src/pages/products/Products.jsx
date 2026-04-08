import { useNavigate } from 'react-router-dom';
import { FUELS } from '../../data/fuels/fuels';
import { ProductCard } from './ProductCard';
import { Text } from '../../components/Text';
import { Reveal } from '../../components/Reveal';
import { useTranslation } from 'react-i18next';
import { HeroSection } from './HeroSection';

export const Products = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('products');
  return (
    <div className='min-h-screen text-slate-900'>
      {/* ── Kreu ── */}
      <Reveal>
        <HeroSection t={t} />
      </Reveal>

      {/* ── Products Section ── */}
      <div className='container py-14'>
        <Reveal>
          <div className='mb-10 flex items-end justify-between'>
            <div className='flex flex-col gap-2'>
              <Text
                text={t('products.subtitle')}
                size='text-[10px]'
                font='font-semibold'
                className='tracking-[0.22em] uppercase text-emerald-600'
              />
              <Text
                text={t('products.title')}
                size='md:text-5xl sm:text-4xl text-3xl'
                font='font-black'
                className='uppercase tracking-tight text-slate-900 leading-none'
              />
            </div>

            <Text
              text={t('products.description')}
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
              <ProductCard key={product.id} product={product} t={t} />
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Footer ── */}
      <Reveal>
        <footer className='px-8 md:px-16 py-8 border-t border-slate-300 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <Text
            text={t('footer.text')}
            size='text-sm'
            font='font-medium font-serif'
            className='tracking-wide text-slate-600'
          />
          <button
            className='text-xs font-bold tracking-[0.18em] uppercase px-7 py-3 bg-transparent border border-slate-400 text-slate-600 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 cursor-pointer'
            onClick={() => navigate('/contact')}
          >
            {t('footer.button')}
          </button>
        </footer>
      </Reveal>
    </div>
  );
};
