import { MoveRight } from 'lucide-react';
import { Text } from '../../components/Text';
import { Contact_Info } from '../../data/contact/contactInfo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation('common', 'contact');
  return (
    <div className='grid md:grid-cols-2 container gap-10 py-20'>
      <div className='flex flex-col gap-7'>
        <div className='flex items-center gap-2'>
          <div className='flex w-9 h-[0.5px] bg-green-500' />
          <Text
            text={t('contact:subTitle')}
            size='text-xs'
            font='font-medium font-serif'
            className='uppercase text-green-500 tracking-[0.2em] '
          />
        </div>
        <Text
          text={t('contact:title')}
          size='text-3xl'
          font='font-semibold font-serif'
          className='text-green-800 leading-snug'
        />
        {Contact_Info.map((item) => (
          <div className='flex items-center gap-3' key={item.id}>
            <span className='flex w-12 h-12 items-center justify-center bg-green-100 rounded-lg text-green-900'>
              <item.icon />
            </span>
            <div>
              <Text
                text={t(`common:${item.label}`)}
                size='text-xs'
                font='font-medium'
                className='uppercase tracking-wider text-green-700'
              />
              <Text
                text={t(`common:${item.text}`)}
                size='text-sm'
                font='font-medium'
                className='text-slate-700 tracking-wider'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex md:flex-row flex-col gap-4 w-full'>
          <Input
            label={t('contact:name')}
            placeholder={t('contact:namePlaceholder')}
            className={'flex-1'}
          />
          <Input
            label={t('contact:surname')}
            placeholder={t('contact:surnamePlaceholder')}
            className={'flex-1'}
          />
        </div>
        <Input
          label={t('contact:email')}
          placeholder={t('contact:emailPlaceholder')}
        />
        <Input
          label={t('contact:subject')}
          placeholder={t('contact:subjectPlaceholder')}
        />
        <Input
          label={t('contact:message')}
          multiline
          placeholder={t('contact:messagePlaceholder')}
        />

        <div className='flex justify-start'>
          <Button
            name={t('contact:button')}
            endIcon={<MoveRight />}
            bgColor='#16a34a'
            bgHover='#15803d'
            color='white'
            borderHover='#166534'
            border='transparent'
          />
        </div>
      </div>
    </div>
  );
};
