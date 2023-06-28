const frisby = require("frisby");
// const Joi = frisby.Joi;  - только если требуется 
describe("d00", () => {
    it("Check status, data, args", async function () {
        const result = await frisby
            .post("https://postman-echo.com/post", { "payload": "hello world" })
            .expect("status", 200)
            .expect("json", "data", { payload: "hello world" })
        console.log(result.json.data);
    });
});