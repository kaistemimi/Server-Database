const {Passenger} = require('../../database/models');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


router.get("/", async (req, res) => {
    await Passenger.findAll().then((passengers) => res.json(passengers));
  });

  router.get("/:id", async (req, res) => {
      console.log(req.params)
    await Passenger.findByPk(req.params.id).then((passenger) => res.json(passenger));
  });



  module.exports = router;