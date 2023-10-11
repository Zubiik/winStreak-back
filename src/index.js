const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const express = require('express');
const cors = require('cors');
const app = express();
const bp = require('body-parser');

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/api', routes);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})