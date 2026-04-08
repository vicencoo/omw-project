import { useState } from 'react';
import { Pencil, Check, X, MapPin, Fuel } from 'lucide-react';

const FUEL_TYPES = [
  {
    key: 'euro-petrol',
    label: 'Euro Petrol',
    color: {
      text: 'text-green-600',
      border: 'border-green-200',
      bg: 'bg-green-50',
      dot: 'bg-green-500',
    },
  },
  {
    key: 'crystal-diesel',
    label: 'Crystal Diesel',
    color: {
      text: 'text-blue-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      dot: 'bg-blue-500',
    },
  },
  {
    key: 'petrol',
    label: 'Petrol',
    color: {
      text: 'text-orange-600',
      border: 'border-orange-200',
      bg: 'bg-orange-50',
      dot: 'bg-orange-500',
    },
  },
  {
    key: 'lpg',
    label: 'LPG',
    color: {
      text: 'text-teal-600',
      border: 'border-teal-200',
      bg: 'bg-teal-50',
      dot: 'bg-teal-500',
    },
  },
];

const initialStations = [
  {
    id: 1,
    stationName: 'Stacioni Tiranë Qendër',
    location: 'Bulevardi Dëshmorët e Kombit, Tiranë',
    'euro-petrol': 178,
    'crystal-diesel': 189,
    petrol: 199,
    lpg: 75,
  },
  {
    id: 2,
    stationName: 'Stacioni Durrës',
    location: 'Rruga Tregtare, Durrës',
    'euro-petrol': 176,
    'crystal-diesel': 187,
    petrol: 197,
    lpg: 73,
  },
  {
    id: 3,
    stationName: 'Stacioni Vlorë',
    location: 'Shëtitorja Halim Xhelo, Vlorë',
    'euro-petrol': 179,
    'crystal-diesel': 190,
    petrol: 200,
    lpg: 76,
  },
  {
    id: 4,
    stationName: 'Stacioni Shkodër',
    location: 'Rruga 13 Dhjetori, Shkodër',
    'euro-petrol': 177,
    'crystal-diesel': 188,
    petrol: 198,
    lpg: 74,
  },
  {
    id: 5,
    stationName: 'Stacioni Elbasan',
    location: 'Bulevardi Qemal Stafa, Elbasan',
    'euro-petrol': 175,
    'crystal-diesel': 186,
    petrol: 196,
    lpg: 72,
  },
];

export const ManagePrices = () => {
  const [stations, setStations] = useState(initialStations);
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState('');
  const [saved, setSaved] = useState(null);

  const startEdit = (stationId, key, currentVal) => {
    setEditing({ stationId, key });
    setDraft(String(currentVal));
  };

  const cancelEdit = () => {
    setEditing(null);
    setDraft('');
  };

  const confirmEdit = (stationId, key) => {
    const val = parseFloat(draft);
    if (isNaN(val) || val <= 0) return cancelEdit();
    setStations((prev) =>
      prev.map((s) => (s.id === stationId ? { ...s, [key]: val } : s)),
    );
    setSaved(`${stationId}-${key}`);
    setTimeout(() => setSaved(null), 1500);
    setEditing(null);
  };

  const isEditing = (stationId, key) =>
    editing?.stationId === stationId && editing?.key === key;

  return (
    <div className='min-h-screen container py-10'>
      {/* Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-1'>
          <div className='w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center'>
            <Fuel size={16} className='text-white' />
          </div>
          <h1 className='text-gray-900 text-2xl font-bold tracking-tight'>
            Menaxho Çmimet
          </h1>
        </div>
        <p className='text-gray-400 text-sm ml-11'>
          Përditëso çmimet e karburantit për çdo stacion
        </p>
      </div>

      {/* Station cards */}
      <div className='flex flex-col gap-4'>
        {stations.map((station, si) => (
          <div
            key={station.id}
            className='bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm'
          >
            {/* Station header */}
            <div className='flex items-center gap-3 px-5 py-4 border-b border-gray-100'>
              <div className='w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0'>
                <span className='text-green-600 text-sm font-bold'>
                  {si + 1}
                </span>
              </div>
              <div>
                <h2 className='text-gray-800 font-semibold text-sm leading-tight'>
                  {station.stationName}
                </h2>
                <div className='flex items-center gap-1 mt-0.5'>
                  <MapPin size={11} className='text-gray-300' />
                  <span className='text-gray-400 text-xs'>
                    {station.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Price rows */}
            <div className='px-5 py-3 flex flex-col gap-2'>
              {FUEL_TYPES.map(({ key, label, color: c }) => {
                const price = parseFloat(station[key]);
                const isEditingThis = isEditing(station.id, key);
                const wasSaved = saved === `${station.id}-${key}`;

                return (
                  <div
                    key={key}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 border transition-all duration-200 ${
                      isEditingThis
                        ? `${c.bg} ${c.border}`
                        : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className='flex items-center gap-2.5 w-36'>
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`}
                      />
                      <span className='text-gray-600 text-sm font-medium'>
                        {label}
                      </span>
                    </div>

                    <div className='flex items-center gap-2 flex-1 justify-center'>
                      {isEditingThis ? (
                        <div className='flex items-center gap-2'>
                          <input
                            autoFocus
                            type='number'
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter')
                                confirmEdit(station.id, key);
                              if (e.key === 'Escape') cancelEdit();
                            }}
                            className={`w-24 text-center bg-transparent border-b-2 ${c.text} border-current text-lg font-bold outline-none`}
                          />
                          <span className='text-gray-400 text-xs'>ALL/L</span>
                        </div>
                      ) : (
                        <div className='flex items-center gap-2'>
                          <span
                            className={`text-lg font-bold transition-colors duration-500 ${wasSaved ? c.text : 'text-gray-800'}`}
                          >
                            {price}
                          </span>
                          <span className='text-gray-400 text-xs'>ALL/L</span>
                        </div>
                      )}
                    </div>

                    <div className='flex justify-end gap-1'>
                      {isEditingThis ? (
                        <>
                          <button
                            onClick={() => confirmEdit(station.id, key)}
                            className='w-7 h-7 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors'
                          >
                            <Check size={13} className='text-green-600' />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className='w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'
                          >
                            <X size={13} className='text-gray-400' />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => startEdit(station.id, key, price)}
                          className='w-7 h-7 rounded-lg bg-gray-100 hover:bg-green-100 flex items-center justify-center transition-colors group'
                        >
                          <Pencil
                            size={12}
                            className='text-gray-300 group-hover:text-green-600 transition-colors'
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
