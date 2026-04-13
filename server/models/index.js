/** @type {import('sequelize').ModelStatic<any>} */
const Station = require('./Station');
/** @type {import('sequelize').ModelStatic<any>} */
const Price = require('./Price');

// Station <--> Prices

Station.hasMany(Price, {
  foreignKey: 'station_id',
  as: 'station_prices',
});

Price.belongsTo(Station, {
  foreignKey: 'station_id',
  as: 'station',
});

module.exports = { Station, Price };
