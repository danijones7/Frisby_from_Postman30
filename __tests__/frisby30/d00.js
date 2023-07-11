const frisby = require("frisby");

describe("d00", () => {
    it("Check status, args", async function () {
        const result = await frisby
            .post("https://postman-echo.com/post?set_start_day=June 25, 2023")
            .expect("status", 200)
            .expect("json", "args", { set_start_day: "June 25, 2023" },)

        console.log(result.json.args);

    });
});