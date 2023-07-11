const frisby = require('frisby');
const Joi = frisby.Joi;
const { API_KEY } = require('../properties');
const workspaceId = '0a606548-8c0f-4325-801e-e40d48d6e8eb';
const webhookName = 'echo webhook';
const collectionUid = '28175067-4a211055-b6ee-4af9-9919-0fb6a846fe9a';

describe('d29', () => {
    frisby.globalSetup({
        request: {
            headers: {
                'x-api-key': API_KEY
            }
        }
    })
    it('echo', async function () {
        const result = await frisby
            .post('https://postman-echo.com/post')
            .expect('status', 200)
    })

    it('Create Webhook', async function () {
        const result = await frisby
            .post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}&webhookName=${webhookName}&collectionUid=${collectionUid}}`, {
                "webhook": {
                    "name": webhookName,
                    "collection": collectionUid
                }
            })
            .expect('status', 200)

        let webhookUrl = result.json.webhook.webhookUrl
        console.log(webhookUrl)

        const triggerWebhook = await frisby
            .post(webhookUrl, {
                "message": "yellow world"
            })
            .expect('status', 429)
            .expect('json', 'error.message', "This user/team has breached their monitoring usage limit.")
        console.log(triggerWebhook.json.error.message)

    })

})