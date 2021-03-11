// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customers = [
    {
        routeName:'',
        customerEmail:'',
        customerID:'',
        customerName:'',
        phoneNumber:'',
    }
];

// Displays all customers but would need to only display all cutomer names? The list displayed
app.get('/api/customers', (req, res) => res.json(customers));


app.post('/api/customers', (req, res) => {
    const newCustomer = req.body;

    newCustomer.routeName = newCustomer.name.replace(/\s+/g, '').toLowerCase();
  console.log(newCustomer);

  customers.push(newCustomer);
  res.json(newCustomer);
});


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
