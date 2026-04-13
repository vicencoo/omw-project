const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Station = sequelize.define(
  'Station',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    area: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_price_update: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'stations',
    underscored: true,
    timestamps: true,
  },
);

module.exports = Station;
