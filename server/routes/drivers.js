const express = require('express');
const router = express.Router();
const {Driver} = require('../../database/models');


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


router.get("/", async (req, res) => {
    await Driver.findAll().then((drivers) => res.json(drivers));
  });

  router.get("/:id", async (req, res) => {
      console.log(req.params)
    await Driver.findByPk(req.params.id).then((drivers) => res.json(drivers));
  });



  router.post("/register", async (req, res) => {
      console.log(req.body)
    const emailExist = await Driver.findOne({
      where: { email: req.body.email },
    }); 
    if (emailExist) return res.status(400).send("Email already exist");
    const salt = await bcrypt.genSalt(10);
    console.log(req.body.password);
    const hashPassword = await bcrypt.hash(req.body.password, salt); 
     console.log(hashPassword);
    const driver = await Driver.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password:hashPassword,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        ICN: req.body.ICN,
        driverLicense: req.body.driverLicense,
      })
    res.json(driver)
  })

  router.post("/login", async (req, res) => {
    const user = await Driver.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).send("Email is not found");
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password ");
    res.status(200).json({
        iddriver: user.id,
        token: jwt.sign(
          { userId: user.id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '30*60' } //expires in by seconds
        )
      });
       
  });

  router.delete("/:id", async (req, res) => {
    await Driver.findByPk(req.params.id)
      .then((drivers) => {
        Driver.destroy();
      })
      .then(() => {
        res.json("deleted");
      });
  });



  module.exports = router;