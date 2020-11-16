const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const add = require('./routes/passengers.js')

const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/passenger', (req, res) => {
//   res.json({message:'working connection'})
// })

add();
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
 