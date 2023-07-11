const frisby = require('frisby');
const URL = 'https://sweetpanda.ru/'

// frisby.globalSetup({ request: { timeout: 15000 } });
// // jest.setTimeout(15000);

frisby.globalSetup({
    request: {
        headers: {
            "content-type": "application/json",
        },
        timeout: 30 * 10000,
    },
});

describe('d28', () => {

    it('Checks the response time', async function () {
        const response = await frisby
            .get(`${URL}`)
            .expect('status', 200)
        // console.log(response)
        const responseTime = response._responseTimeMs
        console.log(`Response time is: ${responseTime}`)
        expect(response._responseTimeMs).toBeLessThan(10000)
    });

    it('Lighthouse performance score', async function () {
        const response = await frisby
            .get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`)
        const score = (response.json.lighthouseResult.audits["bootup-time"].score)
        console.log(score)
        // expect(score).toBeGreaterThan(0.9)


    }, 300000);
});