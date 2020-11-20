const express = require('express');
const router = express.Router();
const AuthJwt = require('../Middleware/auth.jwt.js')

const {Car} = require('../../database/models');



router.post("/carId",async(req,res)=>{
  const car= await Car.findOne({where: { driverId :req.body.driverId } })
  const id=car
  console.log(id)
  if(!id) return res.status(400).send("No car found")
  if(id) return res.status(200).json(id)
});


router.post("/create", AuthJwt, async (req, res) => {
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