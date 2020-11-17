const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const car = require('./routes/car.js')
const driver = require('./routes/drivers.js')
const passenger = require('./routes/passengers.js')
// app.get('/api/passenger', (req, res) => {
//   res.json({message:'working connection'})
// })

app.use("/car", car);
app.use("/passenger", passenger);
app.use("/driver", driver);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
 //errors