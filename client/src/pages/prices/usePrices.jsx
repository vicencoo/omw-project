import { useEffect, useState } from 'react';
import { axios } from '../../api/axios';

const Location = {
  city: '',
  area: '',
  station_prices: [
    { fuel: '', price: 0 },
    { fuel: '', price: 0 },
    { fuel: '', price: 0 },
    { fuel: '', price: 0 },
  ],
};

export const usePrices = () => {
  const [station, setStation] = useState(Location);
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    try {
      const res = await axios('/get-stations');
      if (res.data) {
        setStations(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getStations();
    })();
  }, []);

  console.log(stations);

  const changeValue = (key, value) => {
    setStation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const changeStationPrice = (index, key, value) => {
    setStation((prev) => {
      const updatedPrices = [...prev.station_prices];
      updatedPrices[index] = {
        ...updatedPrices[index],
        [key]: value,
      };

      return {
        ...prev,
        station_prices: updatedPrices,
      };
    });
  };

  const submitStation = async () => {
    try {
      const res = await axios.post('/add-station', station);
      if (res.data) {
        setStation(Location);
        await getStations();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { stations, changeValue, changeStationPrice, station, submitStation };
};
