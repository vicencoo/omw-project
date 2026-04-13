const app = require('../server');
const sequelize = require('../config/database');

let initialized = false;

module.exports = async (req, res) => {
  try {
    if (!initialized) {
      await sequelize.authenticate();
      initialized = true;
    }

    return app(req, res);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
