const express = require('express');
const router = express.Router();
const Driver = require('../../models/driver.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const {registerDriverValidation , loginDriverValidation} = require('./driverValidation.js')

router.get("/", async (req, res) => {
    await Driver.findAll().then((drivers) => res.json(drivers));
  });


  router.post("/register", async (req, res) => {
    const {error} = registerDriverValidation(req.body)
    if(error) return res.send(error.details[0].message)
    const emailExist = await Driver.findOne({
      where: { email: req.body.email },
    }); 
    if (emailExist) return res.status(400).send("Email already exist");
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await Driver.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashPassword,
      email: req.body.email,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      ICN: req.body.ICN,
      driverLicense: req.body.driverLicense,
    }).then((user) => res.json(user));
  });


  module.exports = router;