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


