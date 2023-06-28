const frisby = require('frisby');

const BASEURL = "https://postman-echo.com"
describe("d02", () => {
    it("POST raw text", async function () {
        const result = await frisby
            .post(`${BASEURL}/post`)
            .expect("status", 200);
    });

    it("GET with query params", async function () {
        const params = new URLSearchParams({ cat: "meow", cow: "mooh" }); // как еще можно было бы добавить параметры ? 
        const result = await frisby
            .get(`${BASEURL}/get?${params}`)
            .expect("status", 200)
            .expect("json", "args", { cat: "meow", cow: "mooh" });
        console.log(result.json.args)
    });

});
