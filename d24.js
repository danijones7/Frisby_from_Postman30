// const frisby = require('frisby');
// const moment = require('moment');

// describe('d24', () => {
//     it('Increases the moment', async function () {
//         const result = await frisby
//             .get('http://worldtimeapi.org/api/ip')
//             .expect('status', 200)
//             .expect('json', {
//                 weekday: moment().add(2, 'days').format('dddd')
//             });

//     });
// });

const frisby = require('frisby');
const moment = require('moment');

describe('d24', () => {
    it('Increases the moment', async function () {
        await frisby
            .get('http://worldtimeapi.org/api/ip')
            .expect('status', 200)
        const weekday = moment().add(2, 'days').format("dddd");
        console.log(weekday)
    });
});
