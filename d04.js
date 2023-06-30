const frisby = require('frisby');
const Joi = frisby.Joi;

const { API_KEY } = require('../properties');

describe('d04', () => {
    it('Authorization', async function () {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY,
                    }
                }
            })
            .get('https://api.getpostman.com/collections')
            .expect('status', 200)
            .expect("jsonTypes", "collections.*", {
                id: Joi.string(),
                name: Joi.string(),
                owner: Joi.string(),
                uid: Joi.string(),
            })
        result.json.collections.forEach((collection) => {
            console.log(collection.name)

        })
    })

});