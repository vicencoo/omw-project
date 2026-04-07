import { Reveal } from '../../components/Reveal';
import { Text } from '../../components/Text';
import { stats } from '../../data/aboutUs';

export const StatsSection = ({ t }) => {
  return (
    <section className='bg-amber-400'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          {stats.map((s, i) => (
            <Reveal key={i}>
              <div className='py-10 px-6 flex flex-col gap-1 items-start md:border-r border-r-0 border-amber-500 last:border-r-0 border-b md:border-b-0'>
                <Text
                  text={s.value}
                  size='text-4xl md:text-5xl '
                  font='font-serif font-bold'
                  className='text-green-950'
                />
                <Text
                  text={t(s.label)}
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
  );
};
