const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

// Task 1 to 3 - Basic routes and index page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Task 4 - /cart/:id route
app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  if (isNaN(cartId)) {
    return res.status(400).send('Invalid cart ID');
  }
  res.status(200).send({ payment_methods: { credit_cards: true, paypal: false } });
});

// Task 5 - /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Missing userName');
  }
  res.status(200).send(`Welcome ${userName}`);
});

// Task 6 - /available_payments route
app.get('/available_payments', (req, res) => {
  res.status(200).send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;  // Export the app for testing purposes
