const frisby = require("frisby");
const { API_KEY } = require('../properties');
const apiId = '4194b26f-ed12-47a1-aa43-26a1f9737b3b'

describe('d18', () => {
    it('Submit API', async function () {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        'x-api-key': API_KEY,
                    }
                }
            })
            .get(`https://api.getpostman.com/apis/${apiId}`)
            .expect('status', 200)
            .expect('json', 'api.name', 'Cosmos')
            .expect('json', 'api.id', apiId)
        // console.log(result);
        console.trace(result)
    });
});

