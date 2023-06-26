const frisby = require("frisby");

describe("d00", () => {
    it("Check status, args", function () {
        return frisby
            .post("https://postman-echo.com/post?set_start_day=June 25, 2023")
            .expect("status", 200)
            .expect("json", "args", { set_start_day: "June 25, 2023" },)
            .then((result) => {
                console.log(result.json);
            });
    });
});