const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
