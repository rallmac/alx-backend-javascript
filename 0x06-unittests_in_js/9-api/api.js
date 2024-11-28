const express = require('express');
const app = express();

// Route for valid numeric cart IDs
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

