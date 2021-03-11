const express = require('express');
const app = express();

// must use the process.env for heroku
const PORT = process.env.PORT || 3000;

const revervations = [];

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));