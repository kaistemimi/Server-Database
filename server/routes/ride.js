const express = require('express');
const router= express.Router();
const {Ride} = require('../../database/models');
const { ConnectionError } = require('sequelize/types');
// const db = require("../../database/models/ride");
// const { Model } = require('sequelize/types');


Ride.create()
router.get('/', async(req, res) => {
    await Ride.findAll().then((ride) => res.json(ride))
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



router.post('ride/search', async(req, res) => {
   try {
    const rides = await Ride.findAll({
        deparature: req.body.departure,
        destination: req.body.destination
    });
    res.status(200).json(rides);
    } catch(error) {
        res.status(405).json(error);
    }
});




router.get('/top', async(req, res) => {
    try {
        const topList = [];
        const allRides = await Ride.findAll({
            where: {checkedStatus: false}
        });
        let i = 0;
        while(i < allRides.length) {
            let driverIndex = allRides[i].driverId;
            let drivers = Driver.findPk(driverIndex);
            if(list.length > 0) {
                topList.push(list);
            }
            i++;
        }
        res.status(200).json({data: topList})
    }catch(error) {
        res.status(405).json(error);
    }
})



router.post('/reserve', async (req, res) => {
    const passengerId = req.body.passengerId;
    const rideId = req.body.rideId;
    let ride = await Ride.findOne({id: rideId});
    ride.addPassenger(passengerId);
  });





module.export = router ;
