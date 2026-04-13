import { Pencil, Check, X, MapPin, Fuel } from 'lucide-react';
import { useManagePrices } from './useManagePrices';
import { useTranslation } from 'react-i18next';

const fuelStyles = {
  'euro diesel': {
    text: 'text-blue-600',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    dot: 'bg-blue-500',
  },
  'crystal diesel': {
    text: 'text-amber-600',
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    dot: 'bg-amber-500',
  },
  petrol: {
    text: 'text-green-600',
    border: 'border-green-200',
    bg: 'bg-green-50',
    dot: 'bg-green-500',
  },
  lpg: {
    text: 'text-red-600',
    border: 'border-red-200',
    bg: 'bg-red-50',
    dot: 'bg-red-500',
  },
};

const getFuelStyle = (fuel) => {
  const key = fuel?.toLowerCase?.() || '';

  return (
    fuelStyles[key] || {
      text: 'text-gray-600',
      border: 'border-gray-200',
      bg: 'bg-gray-50',
      dot: 'bg-gray-400',
      label: fuel,
    }
  );
};

export const ManagePrices = () => {
  const {
    stations,
    confirmEdit,
    isEditing,
    onChangeEditValue,
    startEdit,
    editing,
    cancelEdit,
    disableButton,
  } = useManagePrices();
  const { t } = useTranslation('common');

  return (
    <div className='min-h-screen container py-10'>
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-1'>
          <div className='w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center'>
            <Fuel size={16} className='text-white' />
          </div>
          <h1 className='text-gray-900 text-2xl font-bold tracking-tight'>
            {t('manage_prices.title')}
          </h1>
        </div>
        <p className='text-gray-400 text-sm ml-11'>
          {t('manage_prices.description')}
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-5'>
        {stations.map((station, i) => (
          <div
            key={station.id}
            className='bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm'
          >
            <div className='flex items-center gap-3 px-5 py-4 border-b border-gray-100'>
              <div className='w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0'>
                <span className='text-green-600 text-sm font-bold'>
                  {i + 1}
                </span>
              </div>

              <div>
                <h2 className='text-gray-800 font-semibold text-sm leading-tight capitalize'>
                  {station.city}
                </h2>
                <div className='flex items-center gap-1 mt-0.5'>
                  <MapPin size={11} className='text-gray-300' />
                  <span className='text-gray-400 text-xs capitalize'>
                    {station.area}
                  </span>
                </div>
              </div>
            </div>

            <div className='px-5 py-3 flex flex-col gap-2'>
              {station.station_prices?.map((priceItem) => {
                const c = getFuelStyle(priceItem.fuel);
                const isEditingThis = isEditing(station.id, priceItem.id);

                return (
                  <div
                    key={`${station.id}-${priceItem.id}`}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 border transition-all duration-200 ${c.border} ${c.bg}`}
                  >
                    <div className='flex items-center gap-2.5 w-36'>
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`}
                      />
                      <span className='text-gray-600 text-sm font-medium capitalize'>
                        {priceItem.fuel}
                      </span>
                    </div>

                    <div className='flex items-center gap-2 flex-1 justify-center'>
                      {isEditingThis ? (
                        <div className='flex items-center gap-2'>
                          <input
                            autoFocus
                            type='number'
                            value={editing.value}
                            onChange={(e) => onChangeEditValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') confirmEdit();
                              if (e.key === 'Escape') cancelEdit();
                            }}
                            className={`w-24 text-center bg-transparent border-b-2 ${c.text} border-current text-lg font-bold outline-none`}
                          />
                          <span className='text-gray-400 text-xs'>ALL/L</span>
                        </div>
                      ) : (
                        <div className='flex items-center gap-2'>
                          <span className={`text-lg font-bold ${c.text}`}>
                            {priceItem.price}
                          </span>
                          <span className='text-gray-400 text-xs'>ALL/L</span>
                        </div>
                      )}
                    </div>

                    <div className='flex justify-end gap-1'>
                      {isEditingThis ? (
                        <>
                          <button
                            onClick={confirmEdit}
                            disabled={disableButton}
                            className='w-7 h-7 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors'
                          >
                            <Check size={13} className='text-green-700' />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className='w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-200 flex items-center justify-center transition-colors'
                          >
                            <X size={13} className='text-gray-500' />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            startEdit(station.id, priceItem.id, priceItem.price)
                          }
                          className='w-7 h-7 rounded-lg bg-gray-200 hover:bg-green-100 flex items-center justify-center transition-colors group'
                        >
                          <Pencil
                            size={12}
                            className='text-gray-500 group-hover:text-green-600 transition-colors'
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
