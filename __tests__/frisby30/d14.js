const frisby = require('frisby');
const Joi = frisby.Joi;
const { ACCESS_TOKEN } = require('../properties');
describe('d14', () => {
    it('Authorization', async function () {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        "Authorization": `Bearer ${ACCESS_TOKEN}`,
                    }
                }
            })
            .get('https://api.github.com/user/repos')
            .expect('status', 200)
        const jsonData = result.json;
        const repoCount = jsonData.length
        console.log(`Number of repositories is: ${repoCount}`)

    });
});
