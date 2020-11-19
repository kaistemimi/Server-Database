const express = require('express');
const router= express.Router();
const {Ride} = require('../../database/models');
const db = require("../../database/models/ride");
const { Model } = require('sequelize/types');
const { QueryTypes} = require('sequelize');

Ride.create()
router.get('/', async(req, res) => {
    await Ride.findAll().then((passenger) => res.json(passenger))
});


router.get('/ride', async(req, res) => {
    await Ride.findOne({where: {date: req.body.date}}).then((ride) => res.json(ride))
});


router.post('/', async(req, res) => {
    await Ride.create({
        departure: req.body.deparature,
        destination: req.body.destination,
        time: req.body.time,
        date: req.body.date,
        price: req.body.price,
        seats: req.body.seats,
        stop1: req.body.stop1,
        stop2: req.body.stop2,
        stop3: req.body.stop3,
        stop4: req.body.stop4,
        driverId: req.driverId
    })
    .then((ride) => res.json(ride))
})


router.post("/reserve/add", async (req, res) => {
    const passengerId = req.body.passengerId;
    const rideId = req.body.rideId;
    let ride = await Ride.findOne({id: rideId});
    ride.addPassenger(passengerId);
  });


//   const ride = await Passenger.create({ id: passengerId });
//   await user.addRide([ride,RidePassengers]);
//   const appointment = await sequelize.query(`INSERT INTO RidePassenger(rideId,passengerId) VALUES("${rideId}","${passengerId}"`, { type: QueryTypes.INSERT});
  


module.export = router ;
