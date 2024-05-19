const express = require('express');
const cors = require('cors');
const sequelize = require('sequelize');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const db = require('./db/models');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.options('*', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, OPTIONS'
//   );
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.status(200).send();
// });
app.use(express.text());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type',
  })
);

db.sequelize.sync({ force: true }).then(() => {
  console.log('db has been re sync');
});

app.use('/api/auth', userRoutes);

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
