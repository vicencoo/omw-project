require('dotenv').config({ quiet: true });

const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');
const priceRoutes = require('./routes/priceRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
// const allowedOrigins = process.env.ALLOWED_LOCAL;

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);

// app.use(
//   cors({
//     origin: process.env.REQUEST_ORIGIN,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
//   }),
// );

app.use(userRoutes);
app.use(priceRoutes);
app.use(contactRoutes);

const port = process.env.PORT || 8000;

sequelize
  .sync()
  .then(() => {
    app.listen(port);
    console.log(`Connected on  port ${port}!`);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
