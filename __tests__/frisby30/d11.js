const frisby = require('frisby');
const Joi = frisby.Joi;

describe('d11', () => {
    it('should i water the plants', async function () {
        const result = await frisby
            .get('https://water-ttl.herokuapp.com/hygrometer')
            .expect('status', 200)
            .expect('jsonTypes', { level: Joi.number() })
        const level = result.json.level
        console.log(`Moisture level is: ${level}`)

        if (level < 60) {
            await frisby
                .post('https://water-ttl.herokuapp.com/water', { duration: 10 })
                .expect('status', 200)
                .then((response) => {
                    console.log('The plants have been watered!', response.json)
                });
        }
        else {
            console.log("No need to water the plants")
        }
    });
});
