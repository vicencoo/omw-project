import { MoveRight } from 'lucide-react';
import { Text } from '../../components/Text';
import { Contact_Info } from '../../data/contact/contactInfo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { useContact } from './useContact';

export const Contact = () => {
  const { t } = useTranslation('common', 'contact');
  const { changeInputValue, email, submit, errors, isDisabled } = useContact();
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
            value={email.name}
            onChange={(e) => changeInputValue('name', e.target.value)}
            placeholder={t('contact:namePlaceholder')}
            className={'flex-1'}
            error={errors.name}
          />
          <Input
            label={t('contact:surname')}
            value={email.surname}
            onChange={(e) => changeInputValue('surname', e.target.value)}
            placeholder={t('contact:surnamePlaceholder')}
            className={'flex-1'}
            error={errors.surname}
          />
        </div>
        <Input
          label={t('contact:email')}
          value={email.email}
          onChange={(e) => changeInputValue('email', e.target.value)}
          placeholder={t('contact:emailPlaceholder')}
          error={errors.email}
        />
        <Input
          label={t('contact:subject')}
          value={email.subject}
          onChange={(e) => changeInputValue('subject', e.target.value)}
          placeholder={t('contact:subjectPlaceholder')}
          error={errors.subject}
        />
        <Input
          label={t('contact:message')}
          multiline
          value={email.message}
          onChange={(e) => changeInputValue('message', e.target.value)}
          placeholder={t('contact:messagePlaceholder')}
          error={errors.message}
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
            onClick={submit}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};
