const express = require('express');
const app = express();

// track total of our calculator
let total = 0;

// get route --> shows total of the calculator
app.get('/calculator', (req, res) => {
  // add logic here to return the total
  // return the current total of the calculator
  res.json({ total });
});




app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});