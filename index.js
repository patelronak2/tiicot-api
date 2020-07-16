const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//Load Environment Variables
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB();

const app = express();

//Body Parser
app.use(express.json());

//Enable CORS
app.use(cors());

//Routes
app.use('/api/v1', require('./routes/route'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('App running at port: ' + PORT)
})