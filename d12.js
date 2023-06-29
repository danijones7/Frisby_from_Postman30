const frisby = require('frisby');

const { API_KEY } = require('../properties');
const COLLECTION_ID = "28175067-419261ac-d96c-4573-bbbd-b7b5d5fd509e";
const ENVIRONMENT_ID = "28175067-958e9ce8-247a-4ed2-bfe8-c3d76ffb49f1";
const WORKSPACE_ID = "0a606548-8c0f-4325-801e-e40d48d6e8eb";

describe('d12', () => {
    it('Postman API KEY', async function () {
        await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY,
                    }
                }
            })
            .get(`https://api.getpostman.com/collections/${COLLECTION_ID}`)
            .expect('status', 200)
        console.log(json.collection.description)
            .get(`https://api.getpostman.com/environments/${ENVIRONMENT_ID}`)
            .expect('status', 200)
            .get(`https://api.getpostman.com/workspaces/${WORKSPACE_ID}`)
            .expect('status', 200)
        // console.log(result.json.environment.id)
    })
})