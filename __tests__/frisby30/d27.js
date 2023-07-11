const frisby = require('frisby');

const { username } = require('../properties');
const { password } = require('../properties')
const BASEURL = 'http://security.postman-breakable.com'

describe('d27', () => {
    it('User WorkFlow', async function () {
        const loginUser = await frisby
            .post(`${BASEURL}/user/login`, {
                body: {
                    username: "German",
                    password: "Sasisa"
                }
            })
            .expect('status', 200)
        console.log(loginUser)
        const session_token = loginUser.json.response.session_token
        console.log(session_token)
        const user_id = loginUser.json.response.user_id
        console.log(user_id)

        const userGetInfo = await frisby
            .get(`${BASEURL}/user`, {
                headers: {
                    'x-api-key': session_token
                }
            })
            .expect('status', 200)
        console.log(userGetInfo.json.response)

        const userSummary = await frisby
            .get(`${BASEURL}/account/${user_id}/summary`, {
                headers: {
                    'x-api-key': session_token
                }
            })
            .expect('status', 200)
        console.log(userSummary.json.response)

        const logoutUser = await frisby
            .get(`${BASEURL}/user/logout`, {
                headers: {
                    'x-api-key': session_token
                }
            })
            .expect('status', 200)
        console.log(logoutUser.json.response)

        const userLogoutSummary = await frisby
            .get(`${BASEURL}/account/${user_id}/summary`)
            .expect('status', 403)
        console.log(userLogoutSummary.json.message)

    });
});