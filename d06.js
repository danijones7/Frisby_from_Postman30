const frisby = require('frisby');

frisby.globalSetup({
    request: {
        headers: {
            'Accept': 'application/json',
        },
    },
});

// frisby.fetch('Get a random dad joke', "https://icanhazdadjoke.com/", {
//     method: 'GET'
// })
//     .expect('status', 200)
//     .expect('header', 'content-type', 'application/json')
//     .expect('jsonTypes', {
//         id: String,
//         joke: String,
//         status: Number,
//     })
//     .expect('json', {
//         status: 200,
//     })
//     .expect('jsonTypes', 'joke', String)
//     .then((response) => {
//         console.log('Random Dad Joke:', response.json.joke);
//     })
//     .finally(() => {
//         frisby.globalSetup({}); // Очищаем настройки после завершения теста
//     });

describe("d06", () => {
    it("Gets the joke", async function () {
        const result = await frisby
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
