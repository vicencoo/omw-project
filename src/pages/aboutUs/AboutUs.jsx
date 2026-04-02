import { MoveRight } from 'lucide-react';
import { Button } from '../../components/button/Button';
import { ServicesSection } from '../home/ServicesSection';
import { stats, values } from '../../data/aboutUs';
import { Reveal } from '../../components/reveal/Reveal';
import { Text } from '../../components/text';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className='relative bg-green-950 overflow-hidden min-h-[90vh] flex items-end'>
        {/* Decorative large number */}
        <span className='absolute top-8 right-6 text-[180px] md:text-[260px] font-serif font-bold text-green-900 select-none leading-none pointer-events-none'>
          {'&'}
        </span>

        {/* Amber accent bar */}
        <div className='absolute top-0 left-0 w-1.5 h-full bg-amber-400' />

        <div className='relative z-10 container mx-auto px-6 md:px-12 pb-20 pt-32 flex flex-col gap-8'>
          {/* Eyebrow */}
          <Reveal>
            <div className='flex items-center gap-3 '>
              <div className='h-px w-10 bg-amber-400' />

              <Text
                text={'Rreth Nesh'}
                className='text-amber-400 tracking-widest uppercase'
                size='text-sm'
                font='font-medium'
              />
            </div>
          </Reveal>

          <Reveal>
            <Text
              size='text-5xl md:text-7xl lg:text-8xl'
              font='font-serif'
              className='text-white leading-[1.05] max-w-3xl'
            >
              Energji.
              <br />
              <span className='text-amber-400'>Besueshmëri.</span>
              <br />
              Kualitet.
            </Text>
          </Reveal>

          <Reveal>
            <Text
              text={`Partneri juaj i besueshëm për karburant cilësor dhe shërbim të
              shpejtë — çdo ditë, çdo udhëtim.`}
              size='text-lg md:text-xl'
              className='max-w-lg leading-relaxed text-green-300'
            />
          </Reveal>

          {/* Down caret */}
          <Reveal>
            <div className='flex items-center gap-4 pt-3'>
              <div className='w-12 h-12 rounded-full border border-green-700 flex items-center justify-center text-green-400 text-xl'>
                ↓
              </div>

              <Text
                text={'Zbuloni historinë tonë'}
                size='text-sm'
                className='text-green-500 tracking-wide'
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────── */}
      <section className='bg-amber-400'>
        <div className='container mx-auto px-6 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            {stats.map((s, i) => (
              <Reveal>
                <div
                  key={i}
                  className='py-10 px-6 flex flex-col gap-1 items-start md:border-r border-r-0 border-amber-500 last:border-r-0 border-b md:border-b-0'
                >
                  <Text
                    text={s.value}
                    size='text-4xl md:text-5xl '
                    font='font-serif font-bold'
                    className='text-green-950'
                  />
                  <Text
                    text={s.label}
                    size='text-sm'
                    font='font-medium'
                    className='text-green-800 uppercase tracking-wider'
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────── */}
      <section className='bg-white py-24 md:py-32'>
        <div className='container mx-auto px-6 md:px-12'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            {/* Text side */}
            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-3'>
                <div className='h-px w-10 bg-amber-400' />

                <Text
                  text={'Historia Jonë'}
                  size='text-sm'
                  font='font-medium'
                  className='tracking-widest uppercase text-amber-600'
                />
              </div>

              <Reveal>
                <Text
                  text={`Nga një vizion i thjeshtë deri te lider i tregut`}
                  size='text-3xl md:text-5xl'
                  font='font-serif'
                  className='text-green-950 leading-tight'
                />
              </Reveal>

              {/* Pull quote */}
              <Reveal>
                <blockquote className='border-l-4 border-amber-400 pl-6 '>
                  <Text
                    text={`"Besojmë se çdo shofer meriton karburant cilësor dhe shërbim
                    me respekt."`}
                    size='text-xl md:text-2xl'
                    font='font-serif'
                    className='text-green-800 italic leading-snug'
                  />
                </blockquote>
              </Reveal>

              <Reveal className='flex flex-col gap-4'>
                <Text
                  text={`Kompania jonë ka filluar me një qëllim të thjeshtë: t'u
                  ofrojmë klientëve tanë produktin më cilësor me shërbimin më të
                  mirë. Sot, me mbi 15 vjet eksperiencë, jemi krenarë të jemi
                  ndër operatorët më të besueshëm të karburantit në rajon.`}
                  size='text-lg'
                  className='text-gray-600 leading-relaxed'
                />
                <Text
                  text={`  Çdo ditë punojmë për të ruajtur standardet tona të larta dhe
                  për të siguruar që çdo klient të largohet i kënaqur.`}
                  size='text-lg'
                  className='text-gray-600 leading-relaxed'
                />
              </Reveal>
            </div>

            {/* Image side */}
            <Reveal>
              <div className='relative'>
                {/* Decorative frame offset */}
                <div className='absolute -top-4 -right-4 w-full h-full border-2 border-amber-400 rounded-2xl' />
                <img
                  src='/images/gas_station_aboutus.avif'
                  alt='Kompania jonë'
                  className='relative rounded-2xl object-cover w-full aspect-4/5 shadow-xl'
                />
                {/* Year badge */}
                <div className='absolute md:-bottom-6 -bottom-8 md:-left-6 -left-4 bg-green-950 text-white px-6 py-4 rounded-xl shadow-lg'>
                  <span className='block text-3xl font-serif font-bold text-amber-400'>
                    2009
                  </span>
                  <span className='text-xs text-green-400 uppercase tracking-wider'>
                    Themeluar
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <div className='bg-green-50'>
        <ServicesSection />
      </div>

      {/* ── VALUES ───────────────────────────────────── */}
      <section className='bg-white py-24 md:py-32'>
        <div className='container mx-auto px-6 md:px-12'>
          {/* Section header */}
          <Reveal>
            <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3 '>
                  <div className='h-px w-10 bg-amber-400' />
                  <span className='text-amber-600 text-sm font-medium tracking-widest uppercase'>
                    Vlerat Tona
                  </span>
                </div>

                <Text
                  text={`Pse të na zgjidhni ne?`}
                  size='text-3xl md:text-5xl'
                  font='font-serif'
                  className='text-green-950 leading-tight'
                />
              </div>

              <Text
                text={`Katër shtylla mbi të cilat ndërtuam reputacionin tonë.`}
                className='text-gray-500 max-w-xs md:text-right leading-relaxed'
              />
            </div>
          </Reveal>

          {/* Value cards */}

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((v, i) => (
              <Reveal>
                <div
                  key={i}
                  className='group relative bg-green-50 hover:bg-green-950 rounded-2xl p-8 transition-colors duration-300 overflow-hidden'
                >
                  {/* Large index number */}
                  <span className='absolute top-4 right-5 text-6xl font-serif font-bold text-green-100 group-hover:text-green-900 select-none transition-colors duration-300'>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <span className='text-3xl block mb-6'>{v.icon}</span>

                  <Text
                    text={v.title}
                    size='text-xl'
                    font='font-serif font-bold'
                    className='text-green-900 group-hover:text-amber-400 transition-colors duration-300'
                  />

                  <Text
                    text={v.desc}
                    size='text-sm'
                    className='text-gray-600 group-hover:text-green-300 leading-relaxed transition-colors duration-300'
                  />

                  {/* Bottom accent */}
                  <div className='mt-8 h-0.5 w-10 bg-amber-400 group-hover:w-full transition-all duration-500' />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────── */}
      <Reveal>
        <section className='bg-green-950 py-20'>
          <div className='container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className='flex flex-col gap-2'>
              <Text
                text={`Gati të bashkëpunojmë?`}
                size='text-3xl md:text-4xl'
                font='font-serif'
                className='text-white leading-tight'
              />

              <Text
                text={`Na kontaktoni sot për çdo pyetje ose informacion.`}
                size='text-lg'
                className='text-green-400'
              />
            </div>

            <Button
              name={'na konatktoni'}
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
