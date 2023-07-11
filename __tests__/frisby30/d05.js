const frisby = require("frisby");
const currency = "RUB";

describe("d05", () => {
    it("Check currency correct response", async function () {
        const result = await frisby
            .get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .expect("status", 200);
        console.log(result.body);  // почему-то не дает вывести какое-то одно значение из body 

    });
});