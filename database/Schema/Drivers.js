const mongoose = require("mongoose");
const db = require("../index.js");

mongoose.Promise = global.Promise;
const driverSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailDriver: { type: String, required: true },
    passwordDriver: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumberDriver: { type: String, required: true },
    idCard : { type: Number, required : true},
    driveLicenceNumber : { type: Number, required : true},
  },
  {
    timestamps: true,
  }
);
const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;
