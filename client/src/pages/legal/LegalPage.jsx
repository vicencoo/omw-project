import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

// Shared layout for the Privacy Policy and Terms of Service pages.
// `page` is the key inside legal.json ('privacy' | 'terms').
export const LegalPage = ({ page }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('legal');
  const sections = t(`${page}.sections`, { returnObjects: true });
  const list = Array.isArray(sections) ? sections : [];

  return (
    <div className='flex flex-col min-h-screen'>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className='relative overflow-hidden flex flex-col pb-20 pt-24 md:pt-32'>
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage:
              'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-serif font-bold text-green-100 select-none whitespace-nowrap pointer-events-none leading-none'>
          {t(`${page}.watermark`)}
        </span>

        <div className='absolute left-0 top-0 w-1 h-full bg-amber-400' />

        <div className='relative z-10 container mx-auto px-6 md:px-16'>
          <Reveal>
            <div className='flex items-center gap-4 mb-10'>
              <div className='h-px w-12 bg-amber-500' />
              <Text
                text={t(`${page}.subtitle`)}
                size='text-xs'
                font='font-medium'
                className='uppercase text-amber-600 tracking-[0.25em]'
              />
              <div className='h-px flex-1 bg-green-200' />
            </div>
          </Reveal>

          <div className='grid md:grid-cols-2 gap-8 items-end'>
            <Reveal>
              <h1 className='text-5xl md:text-7xl font-serif leading-[0.95] text-green-950'>
                {t(`${page}.title1`)}
                <br />
                <span className='text-amber-500'>{t(`${page}.title2`)}</span>
              </h1>
            </Reveal>

            <Reveal>
              <div className='md:pb-2 flex flex-col gap-4'>
                <Text
                  text={t(`${page}.description`)}
                  size='text-lg'
                  font='font-medium'
                  className='text-green-900 leading-relaxed max-w-md'
                />
                <span className='text-green-600 text-xs tracking-widest uppercase'>
                  {t('updated')}: {t('date')}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className='border-t border-green-200 bg-white py-20 md:py-28'>
        <div className='container mx-auto px-6 md:px-16 grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20'>
          {/* Table of contents */}
          <aside className='hidden lg:block'>
            <div className='sticky top-28 flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                <div className='h-px w-10 bg-amber-400' />
                <span className='text-amber-600 text-sm font-medium tracking-widest uppercase'>
                  {t('toc')}
                </span>
              </div>
              <ul className='flex flex-col gap-3 border-l border-green-200 pl-5'>
                {list.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      className='text-sm font-medium text-gray-600 hover:text-green-600 transition-colors duration-200 tracking-wide'
                    >
                      <span className='text-amber-500 font-serif mr-2'>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className='flex flex-col'>
            {list.map((s, i) => (
              <Reveal key={i}>
                <article
                  id={`section-${i + 1}`}
                  className='scroll-mt-28 flex flex-col md:flex-row gap-4 md:gap-8 py-10 border-b border-green-200 first:pt-0 last:border-b-0'
                >
                  <span className='text-4xl font-serif font-bold text-amber-500 leading-none md:w-16 shrink-0'>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className='flex flex-col gap-4 max-w-3xl'>
                    <Text
                      text={s.title}
                      Tag='h2'
                      size='text-2xl md:text-3xl'
                      font='font-serif'
                      className='text-green-950 leading-tight'
                    />

                    {s.paragraphs?.map((p, j) => (
                      <Text
                        key={j}
                        text={p}
                        className='text-gray-600 leading-relaxed'
                      />
                    ))}

                    {s.items?.length > 0 && (
                      <ul className='flex flex-col gap-3 mt-1'>
                        {s.items.map((item, j) => (
                          <li
                            key={j}
                            className='flex items-start gap-3 text-gray-600 leading-relaxed'
                          >
                            <span className='mt-2.5 h-0.5 w-4 shrink-0 bg-amber-400' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <Reveal>
        <section className='bg-green-950 py-20'>
          <div className='container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
            <div className='flex flex-col gap-2'>
              <Text
                text={t('cta.title')}
                size='text-3xl md:text-4xl'
                font='font-serif'
                className='text-white leading-tight'
              />
              <Text
                text={t('cta.description')}
                size='text-lg'
                className='text-green-400'
              />
            </div>

            <Button
              name={t('cta.button')}
              endIcon={<MoveRight />}
              color='#032e15'
              hoverColor='#032e15'
              bgColor='#fbbf24'
              bgHover='#fcd34d'
              onClick={() => navigate('/contact')}
            />
          </div>
        </section>
      </Reveal>
    </div>
  );
};
