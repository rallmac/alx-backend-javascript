const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// GET /cart/:id - existing route
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// GET /available_payments - new route
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// POST /login - new route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
