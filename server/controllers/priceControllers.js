const sequelize = require('../config/database');
const { Station, Price } = require('../models/index');

exports.addStation = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { city, area, station_prices } = req.body;

    const station = await Station.create({ city, area }, { transaction: t });

    const pricesToCreate = station_prices.map((item) => ({
      fuel: item.fuel,
      price: item.price,
      station_id: station.id,
    }));

    await Price.bulkCreate(pricesToCreate, { transaction: t });

    await t.commit();

    res.json({ message: 'Station added!' });
  } catch (err) {
    await t.rollback();
    console.error('Error adding station:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getStations = async (req, res) => {
  try {
    const stations = await Station.findAll({
      include: [
        {
          model: Price,
          as: 'station_prices',
        },
      ],
    });

    res.status(200).json(stations);
  } catch (err) {
    console.error('Error getting stations:', err);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

exports.editStationPrice = async (req, res) => {
  try {
    const { priceId } = req.query;
    const { price, fuel } = req.body;

    const stationPrice = await Price.findByPk(priceId);

    if (!stationPrice) {
      return res.status(404).json({
        message: 'Price not found',
      });
    }

    if (price !== undefined) {
      stationPrice.price = price;
    }

    if (fuel !== undefined) {
      stationPrice.fuel = fuel;
    }

    await stationPrice.save();

    const station = await Station.findByPk(stationPrice.station_id);

    if (!station) {
      return res.status(404).json({
        message: 'Station not found',
      });
    }

    station.last_price_update = new Date();
    await station.save();

    res.status(200).json({
      message: 'Price updated successfully',
      data: stationPrice,
    });
  } catch (err) {
    console.error('Error updating station price:', err);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
