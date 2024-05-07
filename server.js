'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Das sind die ersten Änderungen die hoffentlich sichtbar sind!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
