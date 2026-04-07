import { Text } from '../../components/Text';
import { Reveal } from '../../components/Reveal';
import { SERVICES } from '../../data/home/services';
import { useTranslation } from 'react-i18next';

export const ServicesSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className='container flex flex-col gap-10 py-10'>
      <div className='flex flex-col gap-5 max-w-2xl'>
        <div className='flex items-center gap-2'>
          <span className='flex w-9 h-[0.5px] bg-green-600' />
          <Text
            text={t('servicesSubtitle')}
            size='text-xs'
            font='font-medium font-serif'
            className='uppercase text-green-600 tracking-[0.2em]'
          />
        </div>

        <Text
          text={t('servicesTitle')}
          size='md:text-4xl text-2xl'
          font='font-medium font-serif'
          className='text-green-950 leading-snug italic'
        />

        <Text
          text={t('servicesDescription')}
          className='text-gray-600 md:max-w-xl'
        />
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {SERVICES.map((service) => (
          <Reveal key={service.id}>
            <div className='group h-full rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-200'>
              <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-colors duration-300 group-hover:bg-green-100'>
                <service.icon size={28} className='text-green-700' />
              </div>

              <div className='flex flex-col gap-3'>
                <Text
                  text={t(service.title)}
                  size='text-xl'
                  font='font-semibold font-serif'
                  className='text-green-950'
                />
                <Text
                  text={t(service.description)}
                  size='text-sm'
                  className='leading-6 text-gray-600'
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
