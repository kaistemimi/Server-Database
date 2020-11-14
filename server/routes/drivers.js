const db = require('../../database/models/drivers.js')


exports.getDrivers =(req, res)=>{
    db.getDrivers().then(data => {res.status(200).json(data) })
     .catch(error => res.status(500).send(error))
  
  }