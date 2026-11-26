const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Subscriber = sequelize.define(
  'Subscriber',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'active', // active | unsubscribed
    },
    consent: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    source: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    page: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ip_hash: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'subscribers',
    underscored: true,
    timestamps: true,
    updatedAt: false,
  },
);

module.exports = Subscriber;
