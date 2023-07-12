
module.exports = {
    API_KEY: process.env.API_KEY,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    username: "German",
    password: "Sasisa"
}


const frisby = require('frisby')
it('test just not to be empty', async function () {
    await frisby
        .get('https://www.google.com/')
        .expect('status', 200)


})