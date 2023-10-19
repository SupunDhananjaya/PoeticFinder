const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const elasticSearch = require('elasticsearch');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
require('dotenv').config();

const client = new elasticSearch.Client({
  host: process.env.ELASTIC_URL,
  ssl: { rejectUnauthorized: false, pfx: [] },
});

const elasticRoute = require('./routes/elasticRoutes');

app.use('/api/elastic', elasticRoute);

const PORT = process.env.PORT || 3001;

client.ping(
  {
    requestTimeout: 30000,
  },
  (error) => {
    if (error) {
      console.log('elastic cluster down');
    } else {
      console.log('elastic cluster connected');
    }
  }
);

app.listen(PORT, () => {
  console.log('Listening to port number ' + PORT);
});
