const joi = require('@hapi/joi')

const registerDriverValidation = data =>{
    const validation = joi.object({
        firstName:joi.string().min().required(),
        lastName:joi.string().min().required(),
        email:joi.string().required().email(),
        password:joi.string().min(6).required(),
        address : joi.string().required(),
        phoneNumber : joi.number().required(),
        ICN: joi.number().required(), 
        driverLicense: joi.number().required(), 
    
    })
    return validation.validate(data);
}
const loginDriverValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(6).required(),

    })
    return validation.validate(data);
}
module.exports.registerDriverValidation = registerDriverValidation;
module.exports.loginDriverValidation = loginDriverValidation ;