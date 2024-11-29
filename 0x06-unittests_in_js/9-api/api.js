const express = require('express');
const app = express();
const port = 7865;

// Index route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Cart route
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart IDs
app.get('/cart/*', (req, res) => {
  res.status(404).send('Cannot GET ' + req.url);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export for testing
