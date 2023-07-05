const frisby = require('frisby');
const collectionID = '64a43ad4c2e23789ac546ef8'

describe('d21', () => {
    it('Checks the CollectionID', async function () {
        const result = await frisby
            .get(`https://postman-echo.com/get?collectionUid=${collectionID}`)
            .expect('status', 200)
            .expect('json', 'args', { collectionUid: collectionID })
        console.log(`Collection ID is: ${result._json.args.collectionUid}`)
    })
})