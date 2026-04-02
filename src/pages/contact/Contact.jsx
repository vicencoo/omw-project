import { MoveRight } from 'lucide-react';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input';
import { Text } from '../../components/text';
import { Contact_Info } from '../../data/contact/contactInfo';

export const Contact = () => {
  return (
    <div className='grid md:grid-cols-2 container gap-10 py-20'>
      <div className='flex flex-col gap-7'>
        <div className='flex items-center gap-2'>
          <div className='flex w-9 h-[0.5px] bg-green-500' />
          <Text
            text={'Na Kontaktoni'}
            size='text-xs'
            font='font-medium font-serif'
            className='uppercase text-green-500 tracking-[0.2em] '
          />
        </div>
        <Text
          text={`Jemi këtu për ju, çdo orë të ditës`}
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
                text={item.label}
                size='text-xs'
                font='font-medium'
                className='uppercase tracking-wider text-green-700'
              />
              <Text
                text={item.text}
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
            label={'emri'}
            placeholder={'Shkruani emrin tuaj ...'}
            className={'flex-1'}
          />
          <Input
            label={'mbiemri'}
            placeholder={'Shkruani mbiemrin tuaj ...'}
            className={'flex-1'}
          />
        </div>
        <Input label={'email'} placeholder={'Shkruani email-in tuaj ...'} />
        <Input
          label={'subjekti'}
          placeholder={'Partneritet / Karriere / Media'}
        />
        <Input
          label={'mesazhi'}
          multiline
          placeholder={`Na tregoni se si mund t'ju ndihmojmë ...`}
        />

        <div className='flex justify-start'>
          <Button
            name={'Dërgo Mesazhin'}
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
