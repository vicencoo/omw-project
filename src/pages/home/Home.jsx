import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Reveal } from '../../components/Reveal';
import { LocationsBanner } from './LocationsBanner';
import { homeStats } from '../../data/home/statistics';
import { FuelSlider } from './FuelSlider';
import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServicesSection } from './ServicesSection';
import { useTranslation } from 'react-i18next';
import { getHeroFeatures } from '../../data/home/heroFeatures';

export const Home = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const HERO_FEATURES = getHeroFeatures(t);
  return (
    <div className='flex flex-col gap-20 py-20'>
      <Reveal>
        <section className='container'>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-7 md:border-b-2 md:border-green-200 md:pb-10'>
              <div className='flex items-center gap-2'>
                <span className='flex w-9 h-[0.5px] bg-green-600' />
                <Text
                  text={t('heroSubtitle')}
                  size='text-xs'
                  font='font-medium font-serif'
                  className='uppercase text-green-600 tracking-[0.2em] '
                />
              </div>
              <Text
                text={t('heroTitle')}
                size='md:text-7xl text-5xl'
                font='font-semibold font-serif'
                className='text-green-900 leading-snug italic'
              />
              <Text text={t('heroDescription')} className='md:max-w-120' />
              <div className='flex md:flex-row flex-col gap-4'>
                <Button
                  name={t('findNearest')}
                  bgColor='#16a34a'
                  bgHover='#1e8449'
                  color='white'
                  border='transparent'
                  borderHover='#1e8449'
                  onClick={() => navigate('/locations')}
                />
              </div>
            </div>

            <div className='flex w-full h-full relative'>
              <img
                src='/images/gas-station-adv.avif'
                alt='OMW-Station-Advertise'
                className='w-full h-full object-cover rounded-3xl'
              />

              <div className='absolute bottom-3 left-1/2 w-full -translate-x-1/2 px-3 flex flex-col gap-3 items-end md:bottom-auto md:left-auto md:right-3 md:top-1/2 md:w-auto md:translate-x-0 md:-translate-y-1/2 md:items-end md:px-0'>
                {HERO_FEATURES.map((feature) => (
                  <Reveal key={feature.id}>
                    <div className='flex items-center w-full sm:w-2/3 md:w-72 lg:w-80 gap-2 bg-white rounded-xl p-2 shadow-md sm:p-3'>
                      <feature.icon
                        size={30}
                        className='shrink-0 text-green-700'
                      />

                      <div className='flex min-w-0 flex-col'>
                        <Text
                          text={feature.label}
                          size='text-xs sm:text-sm'
                          font='font-medium'
                        />
                        <Text
                          text={feature.text}
                          size='text-[10px] sm:text-xs'
                          className='text-gray-600'
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className='flex flex-col md:flex-row w-full md:py-14 py-8 md:px-0 px-10 bg-linear-to-r from-green-800 to-green-950 justify-center'>
          {homeStats.map((stat, index) => (
            <Reveal
              key={stat.id}
              className={`md:border-r md:border-b-0 border-b md:py-0 py-8  border-green-700 w-full ${
                index === homeStats.length - 1 ? 'border-r-0 border-b-0' : ''
              }`}
            >
              <div className='flex flex-col gap-1 px-22 items-center'>
                <Text
                  text={stat.label}
                  size='text-4xl'
                  font='font-semibold font-serif'
                  className='text-green-300'
                />
                <Text
                  text={t(stat.text)}
                  size='text-xs'
                  font='font-medium'
                  className='uppercase tracking-widest text-white/55'
                />
              </div>
            </Reveal>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className='flex flex-col gap-7 w-full '>
          <div className='container flex flex-col gap-5 mb-5'>
            <div className='flex items-center gap-2'>
              <span className='flex w-9 h-[0.5px] bg-green-600' />
              <Text
                text={t('productSubtitle')}
                size='text-xs'
                font='font-medium font-serif'
                className='uppercase text-green-600 tracking-[0.2em]'
              />
            </div>
            <Text
              text={t('productTitle')}
              size='md:text-4xl text-2xl'
              font='font-medium font-serif'
              className='text-green-950 leading-snug italic'
            />
          </div>

          <FuelSlider />

          <div className='flex w-full justify-center'>
            <Button
              name={t('productTitle')}
              endIcon={<MoveRight />}
              borderHover={'#016630 '}
              bgHover='#dcfce7 '
              hoverColor='#016630 '
              onClick={() => navigate('/products')}
            />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className='container'>
          <LocationsBanner t={t} />
        </section>
      </Reveal>

      <Reveal>
        <ServicesSection />
      </Reveal>
    </div>
  );
};
