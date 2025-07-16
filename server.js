const express = require('express');
const app = express();

// track total of our calculator
let total = 0;

// get route --> shows total of the calculator
app.get('/calculator', (req, res) => {
  // add logic here to return the total
  // return the current total of the calculator
  // add .status(200) to the response
  // to indicate a successful request
  res.status(200).json({ total });
});

//post route --> updates the total of the calculator
app.post('/calculator', (req, res) => {
  // extract number and operation from request
  const number = req.body.number;
  const operation = req.body.operation;
  // apply operation to total
  if (operation === 'add') {
    total += number;
  } else if (operation === 'subtract') {
    total -= number;
  } else if (operation === 'multiply') {
    total *= number;
  } else if (operation === 'divide') {
    total /= number;
  } else {
    return res.json({ error: 'Invalid operation' });
  }
  // send back the updated total
  res.status(200).json({ total }); 
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});