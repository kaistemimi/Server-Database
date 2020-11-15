const router = require("express").Router();
const Company = require("../../database/Schema/Companies.js");
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

