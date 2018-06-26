const tessel = require('tessel');
const express = require('express');
const climatelib = require('climate-si7020');
const morgan = require('morgan');
const climate = climatelib.use(tessel.port.A);

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(express.json());

// climate.on('error', function(err) {
//   console.log('error connecting module', err);
// });

app.get('/index', (req, res, next) => {
  setImmediate(function loop() {
    climate.readTemperature('f', function(err, temp) {
      if (err) console.log(err);
      climate.readHumidity(function(err, humid) {
        if (err) console.log(err);
        let degreesData = temp.toFixed(4) + 'F';
        let humidityData = humid.toFixed(4) + '%RH';
        let toDisplay = {
          Degrees: degreesData,
          Humidity: humidityData,
        };
        res.send(toDisplay);
      });
    });
  });
});

climate.on('ready', function() {
  console.log('Connected to climate module');
  const port = 8080;
  app.listen(port, () => {
    console.log('Listening on port', port);
  });
});
