const express = require('express');
const app = express();

app.use(express.json());

let total = 0;

// get route --> shows the total of the calculator
app.get('/calculator', (req, res) => {
  // we'll add logic here
  // return the current total of calculator
  res.status(200).json({ total });
});

// post route -->
app.post('/calculator', (req, res) => {
  // get the number and operation from the request
  const number = req.body.number;
  const operation = req.body.operation;

  // apply the operation to total
  if (operation === 'add') {
    total += number;
  } else if (operation === 'subtract') {
    total -= number;
  } else if (operation === 'multiply') {
    total *= number;
  } else if (operation === 'divide') {
    total /= number;
  } else {
    return res.status(400).json({ error: 'Invalid operation' });
  }
  // send back the updated total
  res.status(200).json({ total });
});


app.delete('/calculator', (req, res) => {
  total = 0;
  res.status(204).send();
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});