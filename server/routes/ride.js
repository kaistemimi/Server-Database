const express = require('express');
const router= express.Router();
const {Ride} = require('../../database/models');



router.get('/', async(req, res) => {
    await Ride.findAll().then((passenger) => res.json(passenger))
});


router.get('/RideByDriver', async(req, res) => {
    await Ride.findOne({where: {driverId: req.body.driverId}}).then((ride) => res.json(ride))
});

router.get("/:id", async (req, res) => {
    console.log(typeof req.params.id)
    const id = Number(req.params.id);
    const ride= await Ride.findOne({where: { driverId :id } })
  console.log(ride)
    res.json(ride)
  });
  


router.post('/create', async(req, res) => {
    console.log(req.body)
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
        driverId: req.body.driverId
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
  


module.exports = router ;
