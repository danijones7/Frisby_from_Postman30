const frisby = require("frisby");
// const Joi = frisby.Joi;

describe("d09", () => {
    it("get random user", async function () {
        const userResult = await frisby
            .get("https://randomuser.me/api/")
            .expect("status", 200)
        const user = userResult.json.results[0];
        const userFullName = `${user.name.title} ${user.name.first} ${user.name.last}`
        const echoResult = await frisby
            .post("https://postman-echo.com/post",
                {
                    name: userFullName,
                    email: user.email,
                    id: user.login.uuid,
                })
            .expect("status", 200)
            .expect("json", "json.name", userFullName)
            .expect("json", "json.email", user.email)
            .expect("json", "json.id", user.login.uuid)
        console.log("json", "json.name", userFullName);
        console.log("json", "json.email", user.email);
        console.log("json", "json.id", user.login.uuid);
    });

});