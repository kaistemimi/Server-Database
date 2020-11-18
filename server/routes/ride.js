const express = require('express');
const router= express.Router();
const {Ride} = require('../../database/models');



router.get('/', async(req, res) => {
    await Ride.findAll().then((passenger) => res.json(passenger))
});


router.get('/ride', async(req, res) => {
    await Ride.findOne({where: {date: req.body.date}}).then((ride) => res.json(ride))
});


router.post('/', async(req, res) => {
    await Ride.create({
        deparature: req.body.deparature,
        destination: req.body.destination,
        time: req.body.time,
        date: req.body.date,
        price: req.body.price,
        seats: req.body.seats
    })
    .then((ride) => res.json(ride))
})

module.export = router ;