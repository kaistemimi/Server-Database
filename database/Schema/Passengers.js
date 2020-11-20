const mongoose = require("mongoose");
const db = require("../index.js");

mongoose.Promise = global.Promise;
const passengerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailPassenger: { type: String, required: true },
    passwordPassenger: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumberPassenger: { type: String, required: true },
    idCard : { type: Number, required : true},
    
  },
  {
    timestamps: true,
  }
);
const Passenger = mongoose.model("Driver", passengerSchema);
module.exports = Passenger;
