const joi = require('@hapi/joi')

const registerPassengerValidation = data =>{
    const validation = joi.object({
        firstName:joi.string().min().required(),
        lastName:joi.string().min().required(),
        email:joi.string().email(),
        password:joi.string().min(6),
        address : joi.string(),
        phoneNumber : joi.string(),
        ICN: joi.number().required(), 
    
    })
    return validation.validate(data);
}

const loginPassengerValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(6).required(),

    })
    return validation.validate(data);
}
module.exports.registerPassengerValidation = registerPassengerValidation;
module.exports.loginPassengerValidation = loginPassengerValidation ;