const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.use(express.static(__dirname +'/../car-pooling/dist/car-pooling'));

// app.get('/api/passenger', (req, res) => {
//   res.json({message:'working connection'})
// })

//routes middlewares
app.use('/api/passenger', require('./routes/passenger.js'));
app.use('/api/driver', require('./routes/driver.js'))


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });