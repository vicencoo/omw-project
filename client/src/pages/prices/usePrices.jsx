import { useEffect, useState } from 'react';
import { axios } from '../../api/axios';

// const Location = {
//   city: '',
//   area: '',
//   station_prices: [
//     { fuel: '', price: 0 },
//     { fuel: '', price: 0 },
//     { fuel: '', price: 0 },
//     { fuel: '', price: 0 },
//   ],
// };

export const usePrices = () => {
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

  // const changeValue = (key, value) => {
  //   setData((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };

  // const changeStationPrice = (index, key, value) => {
  //   setData((prev) => {
  //     const updatedPrices = [...prev.station_prices];
  //     updatedPrices[index] = {
  //       ...updatedPrices[index],
  //       [key]: value,
  //     };

  //     return {
  //       ...prev,
  //       station_prices: updatedPrices,
  //     };
  //   });
  // };

  return { stations };
};
