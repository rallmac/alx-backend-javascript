const express = require('express');
const app = express();
const port = 7865;

app.use(express.json()); // Middleware to parse JSON body

// Index route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Cart route
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Login route
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export for testing
