import { MoveRight, Phone } from 'lucide-react';
import { Button } from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/text';
import { ServiceCard } from './ServiceCard';
import { Reveal } from '../../components/reveal/Reveal';
import { services, steps, trusts } from '../../data/services';

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col min-h-screen'>
      {/* ── HERO ──────────────────────────────────────────── */}
      <Reveal>
        <section className='relative overflow-hidden min-h-[90vh] flex flex-col  pb-20 pt-24'>
          {/* Grid texture overlay */}
          <div
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage:
                'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Big decorative background word */}
          <span className='absolute md:top-1/2 top-1/3 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-1/3 text-[22vw] font-serif font-bold text-green-100 select-none whitespace-nowrap pointer-events-none leading-none'>
            FUEL
          </span>

          {/* Left amber bar */}
          <div className='absolute left-0 top-0 w-1 h-full bg-amber-400' />

          {/* Content */}
          <div className='relative z-10 container mx-auto px-6 md:px-16'>
            {/* Eyebrow row */}
            <div className='flex items-center gap-4 mb-10'>
              <div className='h-px w-12 bg-amber-500' />
              <span className='text-amber-600 tracking-[0.25em] text-xs font-medium uppercase'>
                Shërbimet Tona
              </span>
              <div className='h-px flex-1 bg-green-200' />
              <span className='text-green-500 text-xs tracking-widest'>
                EST. 2009
              </span>
            </div>

            <div className='grid md:grid-cols-2 gap-8 items-end'>
              <Reveal>
                <div>
                  <h1 className='text-6xl md:text-8xl font-serif leading-[0.95] text-green-950'>
                    Energjia
                    <br />
                    <span className='text-amber-500'>që lëviz</span>
                    <br />
                    tregun.
                  </h1>
                </div>
              </Reveal>
              <div className='md:pb-2'>
                <Text
                  text={`Nga importi ndërkombëtar deri te çdo stacion karburanti —
                ofrojmë zgjidhje të plota furnizimi me standarde europiane dhe
                besueshmëri absolute.`}
                  size='text-lg'
                  font='font-medium'
                  className='text-green-900 leading-relaxed max-w-md'
                />
                <Reveal>
                  <div className='mt-10 flex flex-wrap gap-4'>
                    <Button
                      name={'Bëhu Partner'}
                      endIcon={<MoveRight />}
                      bgColor='#FBBF24'
                      bgHover='#FCD34D'
                      color='#052E16'
                      hoverColor='#052E16'
                      borderHover='transparent'
                      border='transparent'
                      rounded='35px'
                      onClick={() => navigate('/contact')}
                    />

                    <a
                      href='#sherbimet'
                      className='inline-flex items-center gap-3 border border-green-300 hover:border-amber-400 text-green-700 hover:text-amber-600 px-8 py-4 rounded-full transition-colors duration-200'
                    >
                      Shiko Shërbimet
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── PROCESS STRIP ─────────────────────────────────── */}
      <Reveal>
        <section className='border-y border-green-200 bg-white/60'>
          <div className='container mx-auto px-6 md:px-16'>
            <div className='grid  md:grid-cols-4'>
              {steps.map((s, i) => (
                <div
                  key={i}
                  className='relative py-10 px-6 md:border-r border-r-0 border-green-200 last:border-r-0 md:border-b-0 border-b last:border-b-0 flex items-start gap-5'
                >
                  {/* Arrow connector (hide on last) */}
                  {i < steps.length - 1 && (
                    <span className='hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-amber-500 text-lg'>
                      ›
                    </span>
                  )}
                  <span className='text-3xl font-serif font-bold text-amber-500 leading-none mt-1'>
                    {s.num}
                  </span>
                  <div>
                    <p className='font-semibold text-green-950 text-base'>
                      {s.label}
                    </p>
                    <p className='text-green-600 text-sm mt-0.5'>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <Reveal>
        <section id='sherbimet' className='py-28'>
          <div className='container mx-auto px-6 md:px-16'>
            {/* Section label */}
            <div className='flex items-center gap-4 mb-16'>
              <div className='h-px w-12 bg-amber-500' />
              <span className='text-amber-600 tracking-[0.25em] text-xs font-medium uppercase'>
                Çfarë Ofrojmë
              </span>
            </div>

            {/* Asymmetric grid — row 1: large | small+small stacked */}
            <div className='grid md:grid-cols-3 gap-5 mb-5'>
              {/* Card 01 — spans 2 cols */}
              <ServiceCard s={services[0]} span='md:col-span-2' />

              {/* Cards 02 & 03 stacked */}
              <div className='flex flex-col gap-5'>
                <ServiceCard s={services[1]} />
                <ServiceCard s={services[2]} />
              </div>
            </div>

            {/* Row 2: small+small stacked | large */}
            <div className='grid md:grid-cols-3 gap-5'>
              {/* Card 04 — spans 2 cols */}
              <ServiceCard s={services[3]} span='md:col-span-2' />

              {/* Cards 05 & 06 stacked */}
              <div className='flex flex-col gap-5'>
                <ServiceCard s={services[4]} />
                <ServiceCard s={services[5]} />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── TRUST BAND ────────────────────────────────────── */}
      <section className='bg-amber-400 py-0'>
        <div className='container mx-auto px-6 md:px-16'>
          <div className='grid  md:grid-cols-4'>
            {trusts.map((t, i) => (
              <Reveal>
                <div
                  key={i}
                  className='md:py-12 py-6 px-6 md:border-r border-r-0 border-amber-500 last:border-r-0 border-b md:border-b-0 flex flex-col gap-1'
                >
                  <Text
                    text={t.value}
                    size='text-4xl md:text-5xl'
                    font='font-serif font-bold'
                    className='text-stone-950 '
                  />
                  <Text
                    text={t.label}
                    size='text-xs'
                    font='font-semibold'
                    className='uppercase tracking-widest text-stone-700'
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP CTA ───────────────────────────────── */}
      <section className='relative py-32 overflow-hidden'>
        {/* Grid texture */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage:
              'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className='relative z-10 container mx-auto px-6 md:px-16 text-center'>
          <div className='flex flex-col gap-3'>
            <Reveal>
              <Text
                text={`Bashkëpunim`}
                size='text-xs'
                font='font-medium'
                className='text-amber-600 tracking-[0.25em] uppercase block'
              />
            </Reveal>

            <Reveal>
              <Text
                text={`Gati të furnizoheni me karburant të garantuar?`}
                size='text-4xl md:text-6xl'
                font='font-serif'
                className='text-green-950 leading-tight max-w-3xl mx-auto'
              />
            </Reveal>
            <Reveal>
              <Text
                text={` Kontaktoni ekipin tonë sot dhe merrni një ofertë personale brenda 24
            orëve. Partneriteti fillon me një bisedë.`}
                size='text-lg'
                className='text-green-700 max-w-xl mx-auto leading-relaxed'
              />
            </Reveal>
          </div>
          <Reveal>
            <div className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                name={`Kërko Ofertë Tani`}
                endIcon={<MoveRight />}
                rounded='35px'
                bgHover='#FCD34D'
                bgColor='#FBBF24'
                color='#052E16'
                hoverColor='#052E16'
                border='transparent'
                borderHover='transparent'
                padding='20px 40px'
                onClick={() => navigate('/contact')}
              />

              <Button
                name={`+355 4 222 1666/177`}
                rounded='35px'
                bgHover='transparent'
                bgColor='transparent'
                color='#15803D'
                hoverColor='#15803D'
                border='#7bf1a8 '
                borderHover='#05df72 '
                padding='20px 40px'
                icon={<Phone size={18} className='text-red-500' />}
                onClick={() =>
                  (window.location.href = 'tel:+355 4 222 1666/177')
                }
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
