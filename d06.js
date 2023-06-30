const frisby = require('frisby');

frisby.globalSetup({
    request: {
        headers: {
            'Accept': 'application/json',
        },
    },
});


describe("d06", () => {
    it("Gets the joke", async function () {
        const response = await frisby
            .get(`https://icanhazdadjoke.com/`)
            .expect('status', 200)
            .expect('header', 'content-type', 'application/json')
            .expect('json', {
                status: 200,
            })
            .then((response) => {
                console.log('Random Dad Joke:', response.json.joke);
            })
            .finally(() => {
                frisby.globalSetup({}); // Очищаем настройки после завершения теста
            });
    });
});
