const frisby = require('frisby')
jest.setTimeout(10000000);

describe('d16', () => {
    it('Pagination', async function () {
        let page = 2790;
        let status = 200;

        while (true) {
            const response = await frisby
                .get(`http://xkcd.com/${page}/info.0.json`)
            status = response.status
            if (status == 404) {
                break;
            }
            console.log(`Current page is: ${page}`);
            page++;
            console.log(`Next page is: ${page}`)
        }

        expect(page).toEqual(2801);
    });
});