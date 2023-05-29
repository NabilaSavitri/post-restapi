const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().require(),
        password: Joi.string().min(6).require()
    })
    return schema.validate(data)
}
const loginValidation = (data) => {
        const schema = Joi.object({
            username: Joi.string().require(),
            password: Joi.string().min(6).require()
        })
        return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation