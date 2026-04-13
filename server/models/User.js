const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: Sequelize.STRING, allowNull: false },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: true,
  },
);

module.exports = User;
