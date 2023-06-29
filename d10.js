const frisby = require('frisby');

describe('d10', () => {
    it('get response 404 from mock server', async function () {
        const result = await frisby
            .get('https://0b8858bc-d157-43ce-8d2c-37136ada05c3.mock.pstmn.io')
            .expect('status', 404)
    });
});