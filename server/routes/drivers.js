const express = require('express');
const router = express.Router();
const Drivers = require('../../database/models/drivers.js')



exports.getDrivers =(req, res)=>{
    Drivers.getDrivers().then(data => {res.status(200).json(data) })
     .catch(error => res.status(500).send(error))
  
  }