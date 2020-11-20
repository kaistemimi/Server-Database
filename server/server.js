const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

<<<<<<< HEAD
const auth = require('./Middleware/auth.jwt.js')
const car = require('./routes/car.js')
const driver = require('./routes/drivers.js')
const passenger = require('./routes/passengers.js')
const ride = require('./routes/rides.js')


app.use("/car", car);
app.use("/passenger", passenger);
app.use("/driver", driver);
app.use("/ride", ride);

const PORT = 3000;
=======

// app.use(express.static(__dirname +'/../car-pooling/dist/car-pooling'));

// app.get('/api/passenger', (req, res) => {
//   res.json({message:'working connection'})
// })

//routes middlewares
app.use('/api/passenger', require('./routes/passenger.js'));
app.use('/api/driver', require('./routes/driver.js'))

>>>>>>> c933f9a5583e9bc58e7174d84f169a1062953259

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
 //errors