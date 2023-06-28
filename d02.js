const frisby = require('frisby');

const baseurl = "https://postman-echo.com"
describe("d02", () => {
    it("Post raw text", async () => {
        const result = await frisby.post(`${baseurl}/post`)
            .expect("status", 200);
    });

    it("Get with query params", async () => {
        const params = new URLSearchParams({ number: 1, value: "start" });
        const result = await frisby
            .get(`${baseurl}/get?${params}`)
            .expect("status", 200)
            .expect("json", "args", { number: "1", value: "start" });
    });
});
