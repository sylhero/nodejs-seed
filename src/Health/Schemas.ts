import * as Joi from 'joi';

const healthPost = {
    params: {
        name: Joi.string().trim().required()
    },
    query: {
        limit: Joi.number().required()
    },
    payload: {
        max: Joi.string().trim().required(),
        min: Joi.string().trim().required()
    }
};

const Schemas = {
    healthPost
};

export default Schemas;
