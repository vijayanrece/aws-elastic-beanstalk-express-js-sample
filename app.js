const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Vijayan World! Welcomes you for second time2222222222222222222222'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
