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
//     { fuel: '', price: 0 },
//   ],
// };

export const useManagePrices = () => {
  const [stations, setStations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [station, setStation] = useState(Location);

  const getPrices = async () => {
    try {
      const res = await axios('/get-stations');
      if (res.data) {
        setStations(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getPrices();
    })();
  }, []);

  const startEdit = (stationId, priceId, currentPrice) => {
    setEditing({
      stationId,
      priceId,
      value: String(currentPrice ?? ''),
    });
  };

  const cancelEdit = () => {
    setEditing(null);
  };

  const onChangeEditValue = (value) => {
    setEditing((prev) => (prev ? { ...prev, value } : prev));
  };

  const confirmEdit = async () => {
    if (!editing) return;
    setDisableButton(true);

    const value = editing.value?.trim();

    if (!value) {
      cancelEdit();
      return;
    }

    try {
      await axios.post(`/edit-station-prices?priceId=${editing.priceId}`, {
        price: editing.value,
      });

      await getPrices(); // refresh updated prices
      cancelEdit();
    } catch (err) {
      console.error(err);
    } finally {
      setDisableButton(false);
    }
  };

  const isEditing = (stationId, priceId) =>
    editing?.stationId === stationId && editing?.priceId === priceId;

  //
  //
  // const changeValue = (key, value) => {
  //   setStation((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };

  // const changeStationPrice = (index, key, value) => {
  //   setStation((prev) => {
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

  // const submitStation = async () => {
  //   try {
  //     const res = await axios.post('/add-station', station);
  //     if (res.data) {
  //       setStation(Location);
  //       // await getStations();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return {
    stations,
    confirmEdit,
    isEditing,
    onChangeEditValue,
    startEdit,
    editing,
    cancelEdit,
    disableButton,
    loading,

    // changeValue,
    // changeStationPrice,
    // station,
    // submitStation,
  };
};
