const express = require('express');
const path = require('path');
const carList = require('./cars').cars;

const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/cars', (req, res) => {
  res.json(carList).status(200);
});

app.get('/availability', (req, res) => {
  const carId = Number(req.query.id);
  if (carId) {
    const availability = carList.find(car => car.id === carId);
    if (availability) {
      return res
        .json(
          {
            id: carId,
            availability: generateAvailability()
          }
        )
        .status(200);
    }
    return res
      .json(
        {
          errorMessage: 'Incorrect car id'
        }
      )
      .status(404)
  }
  return res
    .json(
      {
        errorMessage: 'car id required'
      }
    )
    .status(404)
});

const generateAvailability = () => {
  const availabilityOptions = ['Unavailable','In Dealership', 'Out of Stock',];
  const maxNumber = availabilityOptions.length;
  const indexNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  return availabilityOptions[indexNumber];
};

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
