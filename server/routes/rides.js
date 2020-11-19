const express = require('express');
const router= express.Router();
const {Ride} = require('../../database/models');
const db = require("../../database/models/ride");
// const { Model } = require('sequelize/types');
// const { QueryTypes} = require('sequelize');
// const { object } = require('joi');

// Ride.create()
router.get('/', async(req, res) => {
    await Ride.findAll().then((passenger) => res.json(passenger))
});


router.get('/ride', async(req, res) => {
    await Ride.findOne({where: {date: req.body.date}}).then((ride) => res.json(ride))
});


// router.post('/', async(req, res) => {
//     await Ride.create({
//         departure: req.body.deparature,
//         destination: req.body.destination,
//         time: req.body.time,
//         date: req.body.date,
//         price: req.body.price,
//         seats: req.body.seats,
//         stop1: req.body.stop1,
//         stop2: req.body.stop2,
//         stop3: req.body.stop3,
//         stop4: req.body.stop4,
//         driverId: req.driverId
//     })
//     .then((ride) => res.json(ride))
// })


router.post("/reserve/add", async (req, res) => {
    const passengerId = req.body.passengerId;
    const rideId = req.body.rideId;
    let ride = await Ride.findOne({id: rideId});
    ride.addPassenger(passengerId);
  });


//   const ride = await Passenger.create({ id: passengerId });
//   await user.addRide([ride,RidePassengers]);
//   const appointment = await sequelize.query(`INSERT INTO RidePassenger(rideId,passengerId) VALUES("${rideId}","${passengerId}"`, { type: QueryTypes.INSERT});
  



//basma
router.post('/add',async(req,res)=>{
    // const {departure,destination,time,date,price,seats,stop1,stop2,stop3,stop4,driverId} = req.body
    console.log(req.body)
    const ride = await Ride.create({
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
    });
    res.json(ride);
})

router.get('/:id',async (req,res)=>{
    const result = [];
    const driverId = req.params.id;
      await Ride.finePK(driverId)
    .then((rides)=>{
        if(rides.length ===0) res.status(204).json({data: []});
        result = rides.filter(Unchecked =>{
        return unchecked.unckheckedStatus  === false})
        res.json({data: result})
     
    })
    .then(err=>{
    res.status(500).json(err)
    })
})



module.exports = router ;
