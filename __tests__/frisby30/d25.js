const frisby = require('frisby');
const hexColor = '47594a'

describe('d25', () => {
    it('Gets the full color by HEX', async function () {
        const result = await frisby
            .get(`https://www.thecolorapi.com/id?hex=${hexColor}&format=json`)
            .expect('status', 200)
        const body = await result.json;
        const { hex, rgb, name } = body; //destructuring
        const fullColor = JSON.stringify({
            hex: hex.value,
            rgb: rgb.value,
            name: name.value
        });
        console.log(fullColor);
        const { post } = frisby;
        post('https://postman-echo.com/post', { 'payload': fullColor })
            .expect('status', 200)
            .expect("json", "data", { payload: fullColor })

    })
})

