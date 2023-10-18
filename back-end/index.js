const express = require('express');
const cors = require("cors");
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
require('dotenv').config();

const elasticRoute = require("./routes/elasticRoutes");

app.use("/api/elastic",elasticRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log("Listening to port number "+ PORT);
}); 