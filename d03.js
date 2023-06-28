const frisby = require("frisby");

describe("d03", () => {
    it("Check status and data", async function () {
        const echoResult = await frisby
            .post("https://postman-echo.com/post", {
                animals: "sounds",
            })
            .expect("status", 200)
            .expect("json", "data", {
                animals: "sounds",
            });
        console.log(echoResult.json.data);
    });
});