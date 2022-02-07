// Depedencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

//import routes
const { getWheather } = require('./routes/getData');

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', getWheather);
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
