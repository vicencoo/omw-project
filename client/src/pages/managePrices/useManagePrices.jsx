import { useEffect, useState } from 'react';
import { axios } from '../../api/axios';

export const useManagePrices = () => {
  const [stations, setStations] = useState([]);
  const [editing, setEditing] = useState(null);

  const getPrices = async () => {
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
    }
  };

  const isEditing = (stationId, priceId) =>
    editing?.stationId === stationId && editing?.priceId === priceId;

  return {
    stations,
    confirmEdit,
    isEditing,
    onChangeEditValue,
    startEdit,
    editing,
    cancelEdit,
  };
};
