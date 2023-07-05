const frisby = require('frisby');

describe('d27', () => {
    it('Create User', async function () {
        const response = await frisby
            .post('http://security.postman-breakable.com/user', {
                username: "German",
                password: "Sasisa"
            })
            .expect('status', 200)
    })
})