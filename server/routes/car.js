const express = require('express');
const router = express.Router();
const AuthJwt = require('../Middleware/auth.jwt.js')

const {Car} = require('../../database/models');


router.get("/:id", async (req, res) => {
  await Car.findByPk(req.params.id).then((car) => res.json(car));
});

router.post("/create", async (req, res) => {
  console.log(req.body)
  const car = await Car.create({
      model: req.body.model,
      fuelType: req.body.fuelType,
      color:req.body.color,
      VKT: req.body.VKT,
      VIN: req.body.VIN,
      maxSeats: req.body.maxSeats,
      driverId: req.body.driverId
    })
  res.json(car)
})

module.exports = router;