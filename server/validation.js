const Joi = require('@hapi/joi')

const registerValidation = (data) => {

    const schema = Joi.object().keys( {

       name: Joi.string()
                 .min(3)
                 .required(),
        userName: Joi.string()
                     .min(4)
                     .required(),
        email: Joi.string()
                  .min(6)
                  .required()
                  .email(),
    
        password: Joi.string()
                     .min(6)
                     .required(),
        confirmPassword: Joi.string()
                             .min(6)
                             .required(),
           
    })
    return schema.validate(data);
}



module.exports.registerValidation = registerValidation;

 