const router = require("express").Router();
const Driver = require("../../database/Schema/Companies.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

//driver registration validation

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.number().required(),
    address: Joi.string().required(),
    idCard: Joi.number().required(),
    driverLicenceNumber : Joi.number().required()
})

router.post("/add", async (req, res, next) => {
    //check if driver account  already exists
    console.log(req.body);
    const emailExist = await Driver.findOne({ emailDriver: req.body.emailDriver });
    if (emailExist) return res.status(200).json({message:"Email already exists"});
  
    try {
      //hashing the  password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.passwordDriver, salt);
  
      const newDriver = new Driver({
        type: req.body.type,
        name: req.body.name,
        emailDriver: req.body.emailDriver,
        passwordDriver: hashedPassword,
        address: req.body.address,
        phoneNumberDriver: req.body.phoneNumberDriver,
        idCard : req.body.idCard,
        driverLicenceNumber : req.body.driverLicenceNumber
      });
      //if there is an error
      const { error } = await schema.validateAsync(req.body);
      const savedDriver = await newDriver.save();
      res.send(savedDriver);
    } catch (error) {
      if (error.isJoi === true) res.status(400).send(error.details[0].message);
      next(error);
    }
  });