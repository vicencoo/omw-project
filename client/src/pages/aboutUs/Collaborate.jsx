import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

export const Collaborate = ({ t }) => {
  const navigate = useNavigate();
  return (
    <section className='bg-green-950 py-20'>
      <div className='container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='flex flex-col gap-2'>
          <Text
            text={t('collaborate.title')}
            size='text-3xl md:text-4xl'
            font='font-serif'
            className='text-white leading-tight'
          />

          <Text
            text={t('collaborate.description')}
            size='text-lg'
            className='text-green-400'
          />
        </div>

        <Button
          name={t('collaborate.button')}
          endIcon={<MoveRight />}
          color='#032e15'
          hoverColor='#032e15'
          bgColor='#fbbf24'
          bgHover='#fcd34d'
          onClick={() => navigate('/contact')}
        />
      </div>
    </section>
  );
};
